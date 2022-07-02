import type { NextPage } from 'next';
import {
  Button,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalOverlay,
  Modal,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Avatar } from '../components';
import React, { useEffect, useState } from 'react';
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

  const initialValue = [
    { id: 1, isModify: false },
    { id: 2, isModify: false },
    { id: 3, isModify: false },
  ];

  const [modify, setModify] = useState(initialValue);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div
      className='flex flex-col items-center mt-6 pt-6 rounded-3xl bg-gray-200 w-[700px] pb-7'
      style={{
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      }}
    >
      <div className='pb-4'>
        <span className='text-secondary-main font-bold text-4xl'>
          Ciao, BraindeadHermit
        </span>
      </div>
      <Avatar name='G' color='#CD2222' />
      <div className='pt-2 flex flex-col w-96'>
        <Formik
          initialValues={{ nuovaPassword: '', confermaPassword: '' }}
          validate={(values) => {
            let errors = {};
            if (
              values.confermaPassword &&
              values.nuovaPassword !== values.confermaPassword
            ) {
              errors = {
                ...errors,
                nuovaPassword: 'Le password non coincidono',
                confermaPassword: 'Le password non coincidono',
              };
            }
            return errors;
          }}
          onSubmit={(values, actions) => {}}
        >
          <Form>
            <div className='border-b border-black'>
              {modify[0].isModify ? (
                <div className='pb-2'>
                  <Field name='vecchiaPassword' validate={() => {}}>
                    {({ field, form }: any) => (
                      <FormControl isRequired>
                        <FormLabel htmlFor='email'>
                          <span className='font-bold text-lg'>Username</span>
                        </FormLabel>
                        <div className='flex justify-center items-center'>
                          <InputGroup size='xs'>
                            <Input
                              w={250}
                              type='text'
                              size='sm'
                              rounded={6}
                              bgColor={'white'}
                              className='text-sm'
                              textColor='gray.600'
                            />
                          </InputGroup>
                          <Button
                            width='20'
                            style={{
                              fontWeight: 'bold',
                            }}
                            bgColor={'#1976D2'}
                            _hover={{
                              bgColor: '#63A4FF',
                            }}
                            h={6}
                            mt={0}
                            colorScheme=''
                            type='submit'
                            onClick={() => {
                              var obj = modify.map((e) => {
                                if (e.id === 1) {
                                  return { ...e, isModify: false };
                                }
                                return e;
                              });
                              setModify(obj);
                            }}
                          >
                            Salva
                          </Button>
                        </div>
                      </FormControl>
                    )}
                  </Field>
                </div>
              ) : (
                <div className='flex flex-col justify-center pb-4 w-full'>
                  <span className='font-bold items-start text-lg'>
                    Username
                  </span>
                  <div className='flex justify-between w-full mt-1'>
                    <h1 className=''>BraindeadHermit</h1>
                    <div className='w-20'>
                      <Button
                        width='100%'
                        style={{
                          fontWeight: 'bold',
                        }}
                        bgColor={'#1976D2'}
                        _hover={{
                          bgColor: '#63A4FF',
                        }}
                        h={6}
                        mt={0}
                        colorScheme=''
                        type='submit'
                        onClick={() => {
                          var obj = modify.map((e) => {
                            if (e.id === 1) {
                              return { ...e, isModify: true };
                            }
                            return e;
                          });
                          setModify(obj);
                        }}
                      >
                        Modifica
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className='border-b border-black'>
              {modify[1].isModify ? (
                <div className='pt-4 pb-2'>
                  <Field name='vecchiaPassword' validate={() => {}}>
                    {({ field, form }: any) => (
                      <FormControl isRequired>
                        <FormLabel htmlFor='email'>
                          <span className='font-bold text-lg'>Email</span>
                        </FormLabel>
                        <div className='flex justify-center items-center'>
                          <InputGroup size='xs'>
                            <Input
                              w={250}
                              type='text'
                              size='sm'
                              rounded={6}
                              bgColor={'white'}
                              className='text-sm'
                              textColor='gray.600'
                            />
                          </InputGroup>
                          <Button
                            width='20'
                            style={{
                              fontWeight: 'bold',
                            }}
                            bgColor={'#1976D2'}
                            _hover={{
                              bgColor: '#63A4FF',
                            }}
                            h={6}
                            mt={0}
                            colorScheme=''
                            type='submit'
                            onClick={() => {
                              var obj = modify.map((e) => {
                                if (e.id === 2) {
                                  return { ...e, isModify: false };
                                }
                                return e;
                              });
                              setModify(obj);
                            }}
                          >
                            Salva
                          </Button>
                        </div>
                      </FormControl>
                    )}
                  </Field>
                </div>
              ) : (
                <div className='flex flex-col justify-center pb-4 pt-4 w-full'>
                  <span className='font-bold items-start text-lg'>Email</span>
                  <div className='flex justify-between w-full mt-1'>
                    <h1 className=''>scorziellogiovanni00@gmail.com</h1>
                    <div className='w-20'>
                      <Button
                        width='100%'
                        style={{
                          fontWeight: 'bold',
                        }}
                        bgColor={'#1976D2'}
                        _hover={{
                          bgColor: '#63A4FF',
                        }}
                        h={6}
                        mt={0}
                        colorScheme=''
                        type='submit'
                        onClick={() => {
                          var obj = modify.map((e) => {
                            if (e.id === 2) {
                              return { ...e, isModify: true };
                            }
                            return e;
                          });
                          setModify(obj);
                        }}
                      >
                        Modifica
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className='border-b border-black'>
              {modify[2].isModify ? (
                <div className='pb-2 flex items-center justify-between'>
                  <div>
                    <Field name='vecchiaPassword' validate={() => {}}>
                      {({ field, form }: any) => (
                        <FormControl isRequired>
                          <FormLabel htmlFor='email'>
                            <span className='font-bold'>Vecchia password</span>
                          </FormLabel>
                          <InputGroup size='sm'>
                            <Input
                              width={250}
                              type={showVecchiaPassword ? 'text' : 'password'}
                              size='sm'
                              rounded={6}
                              bgColor={'white'}
                              className='text-sm'
                              textColor='gray.600'
                            />
                            <InputRightElement>
                              <span
                                onClick={handleClickVecchiaPassword}
                                className='cursor-pointer select-none material-icons-outlined pr-3'
                              >
                                {showVecchiaPassword
                                  ? 'visibility_off'
                                  : 'visibility'}
                              </span>
                            </InputRightElement>
                          </InputGroup>
                        </FormControl>
                      )}
                    </Field>
                    <Field
                      name='nuovaPassword'
                      validate={(value: string) => {
                        if (value && value.length < 8) {
                          return 'Inserisci almeno 8 caratteri';
                        } else if (!value) {
                          return 'La password non può essere vuota';
                        }
                        return undefined;
                      }}
                    >
                      {({ field, form }: any) => (
                        <FormControl
                          isRequired
                          isInvalid={
                            form.errors.nuovaPassword &&
                            form.touched.nuovaPassword
                          }
                        >
                          <FormLabel htmlFor='email'>
                            <span className='font-bold'>Nuova password</span>
                          </FormLabel>
                          <InputGroup size='sm'>
                            <Input
                              {...field}
                              type={showNuovaPassword ? 'text' : 'password'}
                              size='sm'
                              rounded={6}
                              bgColor={'white'}
                              textColor='gray.600'
                            />
                            <InputRightElement>
                              <span
                                onClick={handleClickNuovaPassword}
                                className='cursor-pointer select-none material-icons-outlined pr-3'
                              >
                                {showNuovaPassword
                                  ? 'visibility_off'
                                  : 'visibility'}
                              </span>
                            </InputRightElement>
                          </InputGroup>
                          <FormErrorMessage>
                            {form.errors.nuovaPassword}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name='confermaPassword'>
                      {({ field, form }: any) => (
                        <FormControl
                          isRequired
                          isInvalid={
                            form.errors.confermaPassword &&
                            form.touched.confermaPassword
                          }
                        >
                          <FormLabel htmlFor='email'>
                            <span className='font-bold'>Conferma password</span>
                          </FormLabel>
                          <InputGroup size='sm'>
                            <Input
                              {...field}
                              type={showConfermaPassword ? 'text' : 'password'}
                              size='sm'
                              rounded={6}
                              bgColor={'white'}
                              textColor='gray.600'
                            />
                            <InputRightElement>
                              <span
                                onClick={handleClickConfermaPassword}
                                className='cursor-pointer select-none material-icons-outlined pr-3'
                              >
                                {showConfermaPassword
                                  ? 'visibility_off'
                                  : 'visibility'}
                              </span>
                            </InputRightElement>
                          </InputGroup>
                          <FormErrorMessage>
                            {form.errors.confermaPassword}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </div>
                  <div>
                    <Button
                      width='20'
                      style={{
                        fontWeight: 'bold',
                      }}
                      bgColor={'#1976D2'}
                      _hover={{
                        bgColor: '#63A4FF',
                      }}
                      h={6}
                      mt={0}
                      colorScheme=''
                      type='submit'
                      onClick={() => {
                        var obj = modify.map((e) => {
                          if (e.id === 3) {
                            return { ...e, isModify: false };
                          }
                          return e;
                        });
                        setModify(obj);
                      }}
                    >
                      Salva
                    </Button>
                  </div>
                </div>
              ) : (
                <div className='flex flex-col justify-center pb-4 pt-4 w-full'>
                  <span className='font-bold items-start text-lg'>
                    Password
                  </span>
                  <div className='flex justify-between w-full mt-1'>
                    <h1 className=''>••••••••••••••</h1>
                    <div className='w-20'>
                      <Button
                        width='100%'
                        style={{
                          fontWeight: 'bold',
                        }}
                        bgColor={'#1976D2'}
                        _hover={{
                          bgColor: '#63A4FF',
                        }}
                        h={6}
                        mt={0}
                        colorScheme=''
                        type='submit'
                        onClick={() => {
                          var obj = modify.map((e) => {
                            if (e.id === 3) {
                              return { ...e, isModify: true };
                            }
                            return e;
                          });
                          setModify(obj);
                        }}
                      >
                        Modifica
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Form>
        </Formik>
        <div className='flex justify-around w-full pt-7'>
          <Button
            className='w-36'
            style={{
              fontWeight: 'bold',
            }}
            bgColor={'#D21919'}
            _hover={{
              bgColor: '#A40A0A',
            }}
            mt={8}
            colorScheme=''
            type='submit'
            onClick={onOpen}
          >
            Elimina Account
          </Button>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        scrollBehavior='inside'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader></ModalHeader>
          <ModalBody>
            <div className='flex justify-around h-24 items-center'>
              <span className='font-bold text-xl'>
                Sei sicuro di voler eliminare l<span>&apos;</span>account?
              </span>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              w={12}
              bgColor={'#1976D2'}
              mr={3}
              textColor='white'
              onClick={onClose}
              _hover={{
                bgColor: '#63A4FF',
              }}
            >
              Si
            </Button>
            <Button
              w={12}
              bgColor={'#1976D2'}
              mr={3}
              textColor='white'
              onClick={onClose}
              _hover={{
                bgColor: '#63A4FF',
              }}
            >
              No
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
export default ModificaAccount;
