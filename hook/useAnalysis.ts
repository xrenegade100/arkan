/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useEffect, useState } from 'react';
import { validation } from '../helpers/CredentialsValidation';

const useAnalysis = () => {
  const [url, setUrl] = useState('');
  const [, setUrlToAnalyze] = useState<URL | null>();
  const [isUrlValid, setIsUrlValid] = useState(validation.VALID);
  // eslint-disable-next-line no-unused-vars
  const [analysis, setAnalysis] = useState();

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

  const makeRequest = async () => {
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
        setAnalysis(await response.json());
      }
    }
  };

  return {
    url,
    isUrlValid,
    makeRequest,
    setUrl,
  };
};

export default useAnalysis;
