import clsx from 'clsx';
import type { NextPage } from 'next';
import { useRef, useState, Ref } from 'react';
import PostItem from '../components/PostItem';
import SearchBar from '../components/SearchBar';
import { DarkPatternsInfo } from '../types';

interface Props {
  darkPatternsInfo: DarkPatternsInfo;
}

const Home: NextPage<Props> = ({ darkPatternsInfo }: Props) => {
  const [link, setLink] = useState('');
  const scrollPoint: Ref<HTMLDivElement> = useRef(null);

  const handleClick = () => {
    scrollPoint.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <header className="relative w-full h-screen flex justify-center items-center bg-header bg-no-repeat bg-cover">
        <SearchBar
          value={link as string}
          onClick={() => {}}
          onChange={(e) => {
            setLink(e.target.value);
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
          <span className="text-8xl font-body font-bold">Dark Patterns</span>
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
              // rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
            >
              <PostItem
                title={item.name}
                sidePosition={change === 0 ? 'left' : 'right'}
              >
                <div />
              </PostItem>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/api/darkpatterns/info');
  let darkPatternsInfo;
  if (response.ok) {
    darkPatternsInfo = await response.json();
  }
  return {
    props: {
      darkPatternsInfo,
    },
  };
}

export default Home;
