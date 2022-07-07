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
  Divider,
  Stack,
} from '@chakra-ui/react';
import { Avatar } from '../components';
import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { useAuth } from '../hooks/useAuth';
import { useAuthPage } from '../hooks';

const ModificaAccount: NextPage = () => {
  const [deleteDisabled, setDeleteDisabled] = useState(true);

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

  const auth = useAuth();

  useAuthPage();

  return (
    <div
      className='flex flex-col items-center mt-6 pt-6 rounded-3xl bg-gray-200 w-[700px] pb-7'
      style={{
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      }}
    >
      <div className='pb-4 truncate w-[70%] text-center'>
        <span className='text-secondary-main text-center font-bold text-4xl truncate w-1/2'>
          Ciao, {auth.user?.email.substring(0, 10)}
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
                              defaultValue={auth.user?.email}
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
                    <h1 className=''>{auth.user?.email.substring(0, 10)}</h1>
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
                              defaultValue={auth.user?.email}
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
                    <h1 className=''>{auth.user?.email}</h1>
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
        size={'md'}
        isOpen={isOpen}
        onClose={() => {
          onClose();
          setDeleteDisabled(true);
        }}
        isCentered
        scrollBehavior='inside'
      >
        <ModalOverlay />
        <ModalContent className='p-4'>
          <ModalCloseButton />
          <ModalHeader>Stai per eliminare il tuo account</ModalHeader>
          <ModalBody>
            Questa azione non può essere annullata e comporta:
            <br />
            <ol
              style={{
                listStyleType: 'circle',
              }}
            >
              <li>L&apos;eliminazione di tutti i tuoi dati</li>
              <li>L&apos;eliminazione di tutti i tuoi commenti</li>
              <li className='font-bold'>
                Che le segnalazioni che hai effettuato non verranno eliminate
              </li>
            </ol>
          </ModalBody>
          <Divider />
          <ModalFooter className='w-full'>
            <Stack
              __css={{
                width: '100%',
              }}
            >
              <span className='m-1'>
                Inserisci la tua email <i>{auth.user?.email}</i> per confermare
              </span>
              <Input
                onChange={(e) => {
                  if (e.target.value === auth.user?.email) {
                    setDeleteDisabled(false);
                  } else setDeleteDisabled(true);
                }}
                mb='4'
                placeholder='Basic usage'
              />
              <Button
                onClick={(e) => {}}
                disabled={deleteDisabled}
                mb='4'
                colorScheme='red'
              >
                Elimina
              </Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
export default ModificaAccount;
