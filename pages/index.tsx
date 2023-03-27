/* eslint-disable object-curly-newline */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import clsx from 'clsx';
import { DocumentData, DocumentReference } from 'firebase/firestore';
import type { NextPage } from 'next';
import Router from 'next/router';
import { useRef, Ref, useState } from 'react';
import Popup from '../components/Popup';
import PostItem from '../components/PostItem';
import SearchBar from '../components/SearchBar';
import useAnalysis from '../hook/useAnalysis';
import { DarkPatternsInfo } from '../types';
import handler from './api/darkpatterns/info';

interface Props {
  darkPatternsInfo: DarkPatternsInfo;
}

const Home: NextPage<Props> = ({ darkPatternsInfo }: Props) => {
  const scrollPoint: Ref<HTMLDivElement> = useRef(null);

  const { url, makeRequest, setUrl, isUrlValid } = useAnalysis();
  const [urlNotExist, setUrlNotExist] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    scrollPoint.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <header className="relative w-full h-screen flex justify-center items-center bg-header bg-no-repeat bg-cover">
        <SearchBar
          value={url}
          onClick={async () => {
            try {
              setIsLoading(true);
              const analysis = await makeRequest();
              if (analysis !== null) {
                if (JSON.stringify(analysis) !== '{}') {
                  Router.push(
                    {
                      pathname: '/analysis/analisi',
                      query: {
                        analysis: (analysis as DocumentReference<DocumentData>)
                          .id,
                      },
                    },
                    '/analysis/analisi',
                  );
                } else {
                  Router.push(
                    {
                      pathname: '/analysis/analisi',
                      query: {
                        analysis: '{}',
                      },
                    },
                    '/analysis/analisi',
                  );
                }
              }
            } catch (error) {
              setUrlNotExist(true);
            }
            setIsLoading(false);
          }}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
          isInvalid={isUrlValid}
          isLoading={isLoading}
          errorText="url inserito non valido"
        />
        <Popup
          isVisible={urlNotExist}
          title="Attenzione!"
          message="L'url che hai inserito è insesistente"
          onClick={() => {
            setUrlNotExist(false);
          }}
        />
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent flex justify-center items-center">
          <button
            className="flex justify-center items-center"
            onClick={handleClick}
          >
            <span className="text-3xl md:text-5xl lg:text-6xl font-body font-bold text-white text-center">
              Cosa sono i{' '}
              <span className="text-primary-main">Dark Pattern</span>
            </span>
            <span className="text-white material-symbols-rounded md-32 md:md-56 lg:md-64">
              expand_more
            </span>
          </button>
        </div>
      </header>
      <div
        ref={scrollPoint}
        className="py-14 flex flex-col justify-start items-start"
      >
        <section className="flex flex-col justify-start items-start text-justify px-4">
          <span className="text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl font-body font-bold">
            Dark Patterns
          </span>
          <span className="px-8 py-4 font-body">
            {darkPatternsInfo.description}
          </span>
        </section>
        {darkPatternsInfo.taxonomy.map((item, index) => {
          const change = index % 2;
          return (
            <section
              className={clsx('w-full flex py-2', {
                'justify-start items-start': change === 0,
                'justify-end items-end': change !== 0,
              })}
              key={index}
            >
              <PostItem
                title={item.name}
                sidePosition={change === 0 ? 'left' : 'right'}
              >
                <div className="w-full md:w-11/12 2xl:w-3/6 m-auto">
                  <div
                    className={clsx('w-full flex flex-col', {
                      'md:justify-start md:items-start': change === 0,
                      'md:justify-end md:items-end': change !== 0,
                    })}
                  >
                    <p className="text-gray-700 text-base text-justify mb-4">
                      {item.description}
                    </p>
                    {item.categories.map((category) => (
                      <div
                        className={clsx(
                          'my-8 w-full flex flex-col justify-center items-center',
                          {
                            'md:justify-start md:items-start': change === 0,
                            'md:justify-end md:items-end': change !== 0,
                          },
                        )}
                      >
                        <h2 className="text-2xl font-bold text-gray-900 mb-2 mx-4">
                          {category.name}
                        </h2>
                        <div
                          className={clsx('w-full flex flex-col items-start', {
                            'md:flex-row md:justify-start ': change === 0,
                            'md:flex-row-reverse md:justify-end': change !== 0,
                          })}
                        >
                          <img
                            className="w-full md:w-2/3 h-auto object-contain object-center md:mx-4 mb-4 md:mb-0"
                            src={category.example_image}
                            alt="Esempio sottocategoria 1"
                          />
                          <div
                            className={clsx(
                              'w-full md:w-1/3 md:mx-2 text-justify',
                            )}
                          >
                            <p className="text-gray-700 text-base mb-4">
                              {category.description}
                            </p>
                            <h3
                              className={clsx(
                                'text-lg font-bold text-gray-900 mb-2',
                                {
                                  'text-left': change === 0,
                                  'text-right': change !== 0,
                                },
                              )}
                            >
                              Esempio
                            </h3>
                            <p className="text-gray-700 text-base">
                              {category.example_description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </PostItem>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await handler();
  let darkPatternsInfo;
  if (response) {
    darkPatternsInfo = response;
  }
  return {
    props: {
      darkPatternsInfo,
    },
  };
}

export default Home;
