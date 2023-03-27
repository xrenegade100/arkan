/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { DocumentData, DocumentReference } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { validation } from '../helpers/CredentialsValidation';
import { AnalysisDarkPattern, Phrase } from '../types';
import { useAuth } from './useAuth';
import useDatabase from './useDatabase';

const useAnalysis = () => {
  const [url, setUrl] = useState('');
  const [urlToAnalyze, setUrlToAnalyze] = useState<URL | null>();
  const [isUrlValid, setIsUrlValid] = useState(validation.VALID);
  const [analysis, setAnalysis] = useState<AnalysisDarkPattern>();

  const { user } = useAuth();

  const { addAnalysis } = useDatabase();

  useEffect(() => {
    try {
      if (url !== '') {
        setUrlToAnalyze(new URL(url));
        setIsUrlValid(validation.VALID);
      } else {
        setIsUrlValid(validation.EMPTY);
      }
    } catch (error) {
      setIsUrlValid(validation.INVALID);
    }
  }, [url]);

  const createAnalysis = async (data: any): Promise<AnalysisDarkPattern> => {
    const phrases: Phrase[] = [];
    Object.entries(data).forEach((entery) => {
      phrases.push({
        text: entery[0],
        score: entery[1] as number,
      });
    });
    let dpScore = 0;

    phrases.forEach((phrase) => {
      if (phrase.score === 0) {
        dpScore += 0;
      }

      if (phrase.score > 0 && phrase.score <= 0.2) {
        dpScore += 1;
      }

      if (phrase.score > 0.2 && phrase.score <= 0.4) {
        dpScore += 2;
      }

      if (phrase.score > 0.4 && phrase.score <= 0.6) {
        dpScore += 4;
      }

      if (phrase.score > 0.6 && phrase.score <= 0.8) {
        dpScore += 4;
      }

      if (phrase.score > 0.8 && phrase.score <= 1) {
        dpScore += 5;
      }
    });

    dpScore /= phrases.length;

    const analysisObject: AnalysisDarkPattern = {
      'danger-level': dpScore.toString(),
      'analysis-dp-name': 'Trick Questions',
      'site-link': url,
      'site-name': urlToAnalyze?.hostname as string,
      'user-id': user?.uid || '',
      'is-shared': false,
      phrases,
      date: new Date().toDateString(),
    };

    return analysisObject;
  };

  const makeRequest = async (): Promise<
    DocumentReference<DocumentData> | null | {}
  > => {
    if (isUrlValid === validation.VALID) {
      const response = await fetch('api/analysis/trickquestions', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          url,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        if (JSON.stringify(responseData) === '{}') {
          return {};
        }
        const composedAnalysis: AnalysisDarkPattern = await createAnalysis(
          responseData,
        );
        const firebaseDocument = await addAnalysis(
          composedAnalysis['site-link'],
          composedAnalysis['analysis-dp-name'],
          composedAnalysis['danger-level'],
          composedAnalysis['user-id'],
          composedAnalysis.date,
          false,
          composedAnalysis.phrases,
        );
        return firebaseDocument;
      }
      throw new Error(`Bad Request: ${response.status}`);
    }

    return null;
  };

  return {
    url,
    isUrlValid,
    makeRequest,
    analysis,
    setAnalysis,
    setUrl,
  };
};

export default useAnalysis;
