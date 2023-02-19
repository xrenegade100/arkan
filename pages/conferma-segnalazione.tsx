import type { NextPage } from 'next';
import { Image, Button } from '@chakra-ui/react';
import React from 'react';
import { useRouter } from 'next/router';
import { Post } from '../types';

const ConfermaSegnalazione: NextPage = () => {
  const router = useRouter();

  const { query: { report }} = router;
  const post = JSON.parse(report as string) as Post;

  return (
    <>
      <div
        className='flex flex-row items-center mt-5 rounded-[50px] h-[595px] w-3/4 z-50 mb-5'
        style={{
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div className='w-1/3 h-[595px]'>
          <Image
            className='absolute w-1/4 z-0'
            style={{ height: '595px' }}
            src='/leftside.png'
            alt='sfondo'
          />
        </div>

        <div className='flex flex-col items-start rounded-r-[50px] pl-5 h-full w-2/3 bg-[#F2F2F2]'>
          <span className='text-gray-almost-black pt-4 font-bold text-4xl'>
            Segnalazione inviata
          </span>
          <span className='text-gray-almost-black pt-4 text-sm mb-10'>
            Ecco i dettagli della tua segnalazione
          </span>

          <div className='flex flex-row '>
            <div className='flex flex-col mr-20 w-[300px] h-[220px] rounded-[25px] bg-gray-200'>
              <div className='flex items-center justify-center h-[35px] bg-secondary-main font-bold text-gray-almost-black rounded-t-[25px]'>
                <span className='text-base'>Dark Pattern</span>
              </div>
              <span className='text-gray-almost-black pt-5 pl-5 text-sm '>
                
              </span>
              <span className='text-gray-almost-black pl-5 font-bold text-sm '>
                {post.dpName}
              </span>
              <span className='text-gray-almost-black pl-5 text-sm '>
                Descrizione
              </span>
              <span className='text-gray-almost-black pl-5 font-bold text-sm '>
                {post.description}
              </span>
              <span className='text-gray-almost-black pl-5 text-sm '>Data</span>
              <span className='text-gray-almost-black pl-5 font-bold text-sm '>
                {post.date}
              </span>
            </div>
            <div className='flex flex-col w-[210px] rounded-[25px] bg-gray-200'>
              <div className='flex items-center justify-center h-[35px] bg-secondary-main font-bold text-gray-almost-black rounded-t-[25px]'>
                <span className='text-base'>Sito</span>
              </div>
              <span className='text-gray-almost-black pt-5 pl-5 text-sm '>
                Url
              </span>
              <span className='text-gray-almost-black pl-5 font-bold text-sm '>
                {post.website}
              </span>
              <span className='text-gray-almost-black pl-5 text-sm '>Nome</span>
              <span className='text-gray-almost-black pl-5 font-bold text-sm '>
                {post.siteName}
              </span>
              <span className='text-gray-almost-black pl-5 text-sm '>Data</span>
              <span className='text-gray-almost-black pl-5 font-bold text-sm '>
                {post.date}
              </span>
            </div>
          </div>
          <div className='m-auto'>
            <Button
              onClick={() => {
                router.push('/segnala');
              }}
              style={{
                height: '40px',
                width: '335px',
                backgroundColor: '#1976D2',
                color: 'white',
              }}
            >
              Effettua un&apos;altra segnalazione
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ConfermaSegnalazione;
