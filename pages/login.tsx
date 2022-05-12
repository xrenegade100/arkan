import type { NextPage } from 'next';
import {
  Button,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
} from '@chakra-ui/react';
import { LogoIcon } from '../components';
import React from 'react';

const Login: NextPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickPassword = () => setShowPassword(!showPassword);
  return (
    <>
      <Image
        className='absolute w-full h-full z-0'
        src='/lines.png'
        alt='sfondo'
      />
      <div
        className='flex flex-col items-center mt-5 rounded-3xl w-3/4 z-50'
        style={{
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div className='flex flex-row h-full w-full'>
          <div
            className='flex flex-col justify-center items-center w-1/2 rounded-tl-3xl rounded-bl-3xl rounded- h-full'
            style={{
              background:
                'linear-gradient(143.87deg, #1976D2 9.78%, #C17900 100%)',
            }}
          >
            <LogoIcon size='5xl'></LogoIcon>
            <h3 className='text-3xl font-bold text-white pt-4'>
              Dark Pattern Risk Evaluation
            </h3>
          </div>
          <div className='flex flex-col justify-center w-1/2 rounded-tr-3xl rounded-br-3xl h-full bg-white'>
            <div className='mx-28'>
              <div className='flex flex-col items-start justify-between mb-8 mt-10'>
                <h1 className='text-5xl text-secondary-gray-almost-black font-bold pb-2'>
                  Login
                </h1>
                <h1 className='text-base text-secondary-gray-almost-black font-semibold'>
                  Se hai già un account puoi accedere qui
                </h1>
              </div>
              <div className='flex flex-col items-start justify-between mb-3'>
                <h1 className='text-xl text-secondary-gray-almost-black font-semibold'>
                  Email
                </h1>
                <div className='w-full'>
                  <InputGroup size='sm'>
                    <Input
                      type={'text'}
                      size='lg'
                      bgColor={'white'}
                      className='text-sm'
                      textColor='gray.600'
                    />
                  </InputGroup>
                </div>
              </div>
              <div className='flex flex-col items-start justify-between'>
                <h1 className='text-xl text-secondary-gray-almost-black font-semibold'>
                  Password
                </h1>
                <div className='w-full'>
                  <InputGroup size='sm'>
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      size='lg'
                      bgColor={'white'}
                      className='text-sm'
                      textColor='gray.600'
                    />
                    <InputRightElement>
                      <span
                        onClick={handleClickPassword}
                        className='material-icons-outlined h-2  pr-3'
                      >
                        {showPassword ? 'visibility_off' : 'visibility'}
                      </span>
                    </InputRightElement>
                  </InputGroup>
                </div>
              </div>
              <div className='flex flex-col items-center justify-between'>
                <div className='pt-4 w-44'>
                  <Button
                    width='100%'
                    style={{
                      fontWeight: 'bold',
                    }}
                    bgColor={'#1976D2'}
                    _hover={{
                      bgColor: '#63A4FF',
                    }}
                    mt={8}
                    colorScheme=''
                    type='submit'
                  >
                    Accedi
                  </Button>
                </div>
                <h1 className='text-lg text-secondary-gray-almost-black font-extrabold mt-5 mb-3'>
                  oppure
                </h1>
                <a onClick={() => {}}>
                  <Image src='/google.png' alt='google' />
                </a>
              </div>
              <div className='flex justify-around item-center mt-8 mb-12'>
                <span className='text-lg text-secondary-gray-almost-black font-semibold'>
                  Non hai un account?{' '}
                  <Link href={'/registrazione'}>
                    <span className='text-lg text-secondary-gray-almost-black font-semibold underline-offset-1'>
                      Registrati
                    </span>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
