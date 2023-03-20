/* eslint-disable operator-linebreak */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import clsx from 'clsx';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Button from '../components/Button';
import useDatabase from '../hook/useDatabase';
import { DetectedDarkPattern } from '../types';
import { useAuth } from '../hook/useAuth';
import LoadingBanner from '../components/LoadingBanner';

const report: NextPage = () => {
  const router = useRouter();
  const { getReportById, dbError } = useDatabase();
  const [reportPost, setReportPost] = useState<DetectedDarkPattern | null>();
  const { user } = useAuth();

  useEffect(() => {
    if (dbError) {
      alert(dbError);
    }
  }, [dbError]);

  useEffect(() => {
    (async () => {
      const id = router.query.report as string;
      if (id) {
        setReportPost(await getReportById(id));
      }
    })();
  }, [router]);

  if (reportPost && reportPost !== null) {
    if (user && user.uid === reportPost['user-id']) {
      return (
        <div className="w-full flex flex-col justify-center items-center">
          <section className="mx-4 pt-24 pb-6 lg:w-4/5 lg:py-24 flex flex-col justify-start items-start">
            <span className="text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl font-body font-bold">
              Fatto!
            </span>
            <span className="py-4 text-lg font-body text-justify lg:text-start">
              La tua segnalazione è stata caricata
            </span>
          </section>
          <section className="w-full flex flex-col justify-center items-center">
            <div className="w-full flex flex-col lg:items-stretch lg:flex-row justify-center items-center">
              <div className="w-4/5 mb-6 lg:mb-0 flex flex-col lg:w-2/5 justify-start items-start lg:items-stretch">
                <div className="w-full my-4 flex flex-col">
                  <span className="text-sm font-body font-bold">
                    Link del sito:
                  </span>
                  <span className="font-body break-words">
                    {reportPost['site-link']}
                  </span>
                </div>
                <div className="w-full my-4 flex flex-col">
                  <span className="text-sm font-body font-bold">
                    Nome sito:
                  </span>
                  <span className="font-body break-words">
                    {reportPost['site-name']}
                  </span>
                </div>
                <div className="my-4">
                  <span className="font-body font-bold rounded-md bg-secondary-main py-1 px-2 text-xl">
                    {reportPost['detected-dp-name']}
                  </span>
                </div>
              </div>
              <div className="w-4/5 lg:w-2/5 flex justify-center items-center lg:justify-end">
                <img
                  className="w-full rounded-md"
                  src={reportPost['dp-image-url']}
                />
              </div>
            </div>
            <div className="w-4/5 flex flex-col justify-start items-start my-6">
              <span className="text-sm font-body font-bold break-words">
                Descrizione:
              </span>
              <span>{reportPost.description}</span>
            </div>
            <div className="w-4/5 mb-6 flex flex-col justify-center items-center lg:justify-start lg:items-start">
              <span className="self-start text-sm font-body font-bold">
                Livello di pericolosità:
              </span>
              <div className="w-full lg:w-1/4 mb-6 lg:mb-0 flex justify-start items-center">
                <div
                  className={clsx('rounded-full w-6 h-6', {
                    'bg-red-500':
                      reportPost['danger-level'] === '5' ||
                      reportPost['danger-level'] === '4',
                    'bg-yellow-500':
                      reportPost['danger-level'] === '3' ||
                      reportPost['danger-level'] === '2',
                    'bg-green-500': reportPost['danger-level'] === '1',
                  })}
                />
                <span className="text-lg font-bold ml-4">
                  {reportPost['danger-level']}
                </span>
              </div>

              <Button
                variant="secondary"
                className="lg:self-end my-4"
                onClick={async () => {
                  router.push('/');
                }}
              >
                <span className="font-body text-white font-bold text-2xl">
                  FINE
                </span>
              </Button>
            </div>
          </section>
        </div>
      );
    }
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <LoadingBanner />
    </div>
  );
};

export default report;
