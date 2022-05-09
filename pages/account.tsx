import type { NextPage } from 'next';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { Avatar, Button } from '../components';
import React from 'react';

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
    <div className='flex flex-col items-center pt-6 rounded-3xl bg-gray-200 w-[700px] h-[600px] '>
      <Avatar name='G' color='#CD2222' />
      <div className='border-b-2 border-b-secondary-gray-almost-black pt-2 pb-2'>
        <span className='text-secondary-gray-almost-black font-semibold'>
          email@example.com
        </span>
      </div>
      <div className='pt-4'>
        <span className='text-secondary-main font-bold text-4xl'>
          Modifica Password
        </span>
      </div>
      <div className='pt-4'>
        <span className='text-black font-bold'>Vecchia password</span>
      </div>
      <div>
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
              className='material-icons-outlined h-2 pr-3'
            >
              {showVecchiaPassword ? 'visibility_off' : 'visibility'}
            </span>
          </InputRightElement>
        </InputGroup>
      </div>
      <div className='pt-4'>
        <span className='text-black font-bold'>Nuova password</span>
      </div>
      <div>
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
              className='material-icons-outlined h-2  pr-3'
            >
              {showNuovaPassword ? 'visibility_off' : 'visibility'}
            </span>
          </InputRightElement>
        </InputGroup>
      </div>
      <div className='pt-4'>
        <span className='text-black font-bold'>Conferma password</span>
      </div>
      <div>
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
              className='material-icons-outlined h-2  pr-3'
            >
              {showConfermaPassword ? 'visibility_off' : 'visibility'}
            </span>
          </InputRightElement>
        </InputGroup>
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
