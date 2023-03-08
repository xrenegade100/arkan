import type { NextPage } from 'next';
import { useRef, useState, Ref } from 'react';
import PostItem from '../components/PostItem';
import SearchBar from '../components/SearchBar';

const Home: NextPage = () => {
  const [link, setLink] = useState('');
  const scrollPoint: Ref<HTMLDivElement> = useRef(null);

  const handleClick = () => {
    scrollPoint.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div>
      <header className='relative w-full h-screen flex justify-center items-center bg-header bg-no-repeat bg-cover'>
        <SearchBar value={link as string} onClick={() => {}} onChange={(e) => {
          setLink(e.target.value);
        }}/>
        <div className='absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent flex justify-center items-center'>
          <button className='flex justify-center items-center' onClick={handleClick}>
            <span className='text-3xl md:text-5xl lg:text-6xl font-body font-bold text-white text-center'>Cosa sono i <span className='text-primary-main'>Dark Pattern</span></span>
            <span className='text-white material-symbols-rounded md-32 md:md-56 lg:md-64'>expand_more</span>
          </button>
        </div>
      </header>
      <div ref={scrollPoint} className="pt-14 flex justify-start items-start">
        <PostItem title='Nagging' sidePosition='left'>
          <p>ciao</p>
        </PostItem>
      </div>
    </div>
  );
};

export default Home;
