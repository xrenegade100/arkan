import type { NextPage } from 'next';
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { Avatar, Button } from '../components';
import React from 'react';
import { Field, Form, Formik } from 'formik';

const ModificaAccount: NextPage = () => {
  const [showVecchiaPassword, setShowVecchiaPassword] = React.useState(false);
  const handleClickVecchiaPassword = () =>
    setShowVecchiaPassword(!showVecchiaPassword);

  const [showNuovaPassword, setShowNuovaPassword] = React.useState(false);
  const handleClickNuovaPassword = () =>
    setShowNuovaPassword(!showNuovaPassword);

  const [showConfermaPassword, setShowConfermaPassword] = React.useState(false);
  const handleClickConfermaPassword = () =>
    setShowConfermaPassword(!showConfermaPassword);

  return (
    <div
      className='flex flex-col items-center mt-6 pt-6 rounded-3xl bg-gray-200 w-[700px] h-[600px]'
      style={{
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Avatar name='G' color='#CD2222' />
      <div className='border-b-2 w-2/4 text-center border-b-secondary-gray-almost-black pt-2 pb-2'>
        <span className='text-secondary-gray-almost-black font-semibold'>
          email@example.com
        </span>
      </div>
      <div className='pt-4'>
        <span className='text-secondary-main font-bold text-4xl'>
          Modifica Password
        </span>
      </div>
      <div className='pt-8'>
        <FormControl isRequired>
          <FormLabel htmlFor='email'>
            <span className='font-bold'>Vecchia password</span>
          </FormLabel>
          <InputGroup size='sm'>
            <Input
              type={showVecchiaPassword ? 'text' : 'password'}
              size='lg'
              bgColor={'white'}
              className='text-sm'
              textColor='gray.600'
            />
            <InputRightElement>
              <span
                onClick={handleClickVecchiaPassword}
                className='cursor-pointer select-none material-icons-outlined h-2 pr-3'
              >
                {showVecchiaPassword ? 'visibility_off' : 'visibility'}
              </span>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </div>
      <div>
        <FormControl isRequired>
          <FormLabel htmlFor='email'>
            {' '}
            <span className='font-bold'>Nuova password</span>
          </FormLabel>
          <InputGroup size='sm'>
            <Input
              type={showNuovaPassword ? 'text' : 'password'}
              size='lg'
              bgColor={'white'}
              textColor='gray.600'
            />
            <InputRightElement>
              <span
                onClick={handleClickNuovaPassword}
                className='cursor-pointer select-none material-icons-outlined h-2  pr-3'
              >
                {showNuovaPassword ? 'visibility_off' : 'visibility'}
              </span>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </div>
      <div>
        <FormControl isRequired>
          <FormLabel htmlFor='email'>
            <span className='font-bold'>Conferma password</span>
          </FormLabel>
          <InputGroup size='sm'>
            <Input
              type={showConfermaPassword ? 'text' : 'password'}
              size='lg'
              bgColor={'white'}
              textColor='gray.600'
            />
            <InputRightElement>
              <span
                onClick={handleClickConfermaPassword}
                className='cursor-pointer select-none material-icons-outlined h-2  pr-3'
              >
                {showConfermaPassword ? 'visibility_off' : 'visibility'}
              </span>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </div>
      <div className='pt-4'>
        <Button>
          <span>Modifica</span>
        </Button>
      </div>
    </div>
  );
};
export default ModificaAccount;
