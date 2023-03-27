/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable operator-linebreak */
import clsx from 'clsx';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AccessDeniedBanner from '../../components/AccessDeniedBanner';
import Button from '../../components/Button';
import LoadingBanner from '../../components/LoadingBanner';
import Toast from '../../components/Toast';
import useAnalysis from '../../hook/useAnalysis';
import useDatabase from '../../hook/useDatabase';
import { AnalysisDarkPattern } from '../../types';
import Popup from '../../components/Popup';

const analisi: NextPage = () => {
  const router = useRouter();
  const { analysis, setAnalysis } = useAnalysis();
  const [analysisExist, setAnalysisExist] = useState(true);
  const { getAnalysisById, shareAnalysisPost, dbError } = useDatabase();

  const [isPostShared, setIsPostShared] = useState(false);

  useEffect(() => {
    const pojo = router.query.analysis;
    (async () => {
      if (pojo) {
        const response = await getAnalysisById(pojo as string);
        setAnalysis(response as AnalysisDarkPattern);
        setAnalysisExist(true);
      } else {
        setAnalysisExist(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (dbError) {
      alert(dbError);
    }
  }, [dbError]);

  if (analysisExist) {
    if (analysis) {
      return (
        <div className="w-full flex flex-col justify-center items-center">
          <section className="mx-4 pt-24 pb-6 lg:w-4/5 lg:py-24 flex flex-col justify-start items-start">
            <span className="text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl font-body font-bold">
              Dark Pattern Rilevato!
            </span>
            <span className="py-4 text-lg font-body text-justify lg:text-start">
              Dall'analisi effettuata sul sito risultano i seguenti dark
              pattern:
            </span>
          </section>
          <section className="w-full lg:w-4/5 flex flex-col-reverse md:flex-row justify-between items-start">
            <div className="ml-4 lg:ml-0 flex justify-center items-center">
              <span
                className={clsx(
                  'text-white text-4xl md:text-5xl lg:text-6xl text-center rounded-md p-2',
                  {
                    'bg-red-500':
                      Number(analysis['danger-level']) <= 5 &&
                      Number(analysis['danger-level']) >= 4,
                    'bg-yellow-500':
                      Number(analysis['danger-level']) < 4 &&
                      Number(analysis['danger-level']) >= 2,
                    'bg-green-500':
                      Number(analysis['danger-level']) < 2 &&
                      Number(analysis['danger-level']) >= 0,
                  },
                )}
              >
                {Number(analysis?.['danger-level']).toFixed(2)}/5
              </span>
              <span className="text-4xl md:text-5xl lg:text-6xl ml-4">
                Trick Questions
              </span>
            </div>
          </section>
          {/*
           * when we will able to analyze more dark patterns
           * we will show different section conditionally,
           * in base of witch dark pattern we find
           */}
          <section className="w-full lg:w-4/5 flex flex-col justify-start items-start my-4">
            <span className="ml-4 lg:ml-0 text-2xl font-semibold">
              Frasi Rilevate
            </span>
            <Toast
              text="Punteggio delle frasi calcolato in un range da 0 a 1"
              onClick={() => {}}
              className="my-4 ml-4 lg:ml-0"
            />
            {
              // mx-16 md:mx-20
              analysis?.phrases.map((phrase) => (
                <div className="w-full lg:w-4/5 flex flex-col justify-start items-start">
                  <div className="w-full flex flex-col lg:flex-row justify-start items-start">
                    <span
                      className={clsx(
                        'ml-4 lg:ml-0 rounded-md px-2 block text-white font-bold my-2',
                        {
                          'bg-red-500':
                            Number(phrase.score) <= 1 &&
                            Number(phrase.score) >= 0.7,
                          'bg-yellow-500':
                            Number(phrase.score) < 0.7 &&
                            Number(phrase.score) >= 0.4,
                          'bg-green-500':
                            Number(phrase.score) < 0.4 &&
                            Number(phrase.score) >= 0,
                        },
                      )}
                    >
                      {phrase.score.toFixed(2)}
                    </span>
                    <span className="break-words mx-4 my-2 text-justify lg:text-left">
                      {phrase.text}
                    </span>
                  </div>
                  <hr className="w-full my-4 border border-gray-200" />
                </div>
              ))
            }
          </section>
          <div className="w-full lg:w-4/5 flex justify-center lg:justify-end items-center">
            <div
              className={clsx('w-fit', {
                'pointer-events-none': isPostShared,
              })}
            >
              <Button
                className="my-4 mr-2"
                variant="secondary"
                onClick={() => {
                  router.push('/');
                }}
              >
                <span className="text-xl font-bold font-body text-white">
                  FINE
                </span>
              </Button>
              <Button
                className="my-4 ml-2 mr-4 lg:mr-0"
                variant="secondary"
                onClick={() => {
                  shareAnalysisPost(analysis.id as string);
                  setIsPostShared(true);
                }}
              >
                <span className="text-xl font-bold font-body text-white">
                  PUBBLICA ANALISI
                </span>
              </Button>
            </div>
            <Popup
              isVisible={isPostShared}
              title="Fatto!"
              message="la tua analisi è ora consultabile da altri utenti nella hall of shame"
              onClick={() => {
                setIsPostShared(false);
                router.push('/');
              }}
            />
          </div>
        </div>
      );
    }
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <LoadingBanner />
      </div>
    );
  }
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <AccessDeniedBanner />
    </div>
  );
};
export default analisi;
