/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { NextPage } from 'next';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Typewriter, { TypewriterClass } from 'typewriter-effect';
import AccountNotify from '../components/AccountNotify';
import Button from '../components/Button';
import GoogleButton from '../components/GoogleButton';
import Input from '../components/Input';
import { useAuth } from '../hook/useAuth';
import { validation } from '../helpers/CredentialsValidation';

const login: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginWithEmail, authenticateWithGoogle, firebaseError } = useAuth();

  const [accountAlreadyExist, setAccountAlreadyExist] = useState(false);
  const [isPasswordIncorrect, setIsPasswordIncorrect] = useState(
    validation.VALID,
  );
  const [isEmailValid, setIsEmailValid] = useState(validation.VALID);

  useEffect(() => {
    setAccountAlreadyExist(false);
    setIsEmailValid(validation.VALID);
    setIsPasswordIncorrect(validation.VALID);
  }, []);

  useEffect(() => {
    if (firebaseError) {
      if (firebaseError.code === 'auth/user-not-found') {
        setAccountAlreadyExist(true);
      }
      if (firebaseError.code === 'auth/invalid-email') {
        setIsEmailValid(validation.INVALID);
      }
      if (firebaseError.code === 'auth/wrong-password') {
        setIsPasswordIncorrect(validation.INVALID);
      }
    }
  }, [firebaseError]);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-white to-secondary-accent">
      <div className="w-10/12 h-3/4 lg:w-3/4 lg:h-4/5  flex justify-center items-center rounded-xl shadow-xl overflow-hidden">
        <div className="hidden lg:block relative w-1/2 h-full bg-login-left-side bg-cover">
          <div className="w-full h-full p-0 m-0 absolute">
            <div className="-z-10 w-full h-full flex justify-center items-center animate-cover">
              <img
                src="/eye.svg"
                className="w-72 xl:w-96 h-auto animate-fade-in"
                alt="arkan"
              />
            </div>
            <div className="absolute top-0 left-0 z-0 w-full h-full flex justify-center items-center">
              <span className="font-logo text-secondary-main text-8xl xl:text-9xl">
                <Typewriter
                  options={{
                    loop: false,
                    cursor: '_',
                  }}
                  onInit={(typewriter: TypewriterClass) => {
                    typewriter
                      .pauseFor(2000)
                      .changeDelay(400)
                      .typeString('<span style="color: #fff0;">_</span>ARKAN')
                      .start();
                  }}
                />
              </span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 bg-white h-full flex flex-col justify-between items-center">
          <div />
          <span className="font-logo text-5xl text-secondary-main mt-2 lg:mt-4">
            Benvenuto!
          </span>
          <div className="w-10/12 lg:w-9/12 2xl:w-7/12 flex flex-col justify-center items-center">
            <div className="w-full flex flex-col justify-center items-center lg:my-4">
              <AccountNotify isVisible={accountAlreadyExist} />
              <div className="w-full lg:py-4">
                <span className="font-body text-sm font-bold">Username:</span>
                <Input
                  hint="username"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="py-2"
                  value={email}
                  isInvalid={isEmailValid}
                  errorText="l'email inserita non è valida"
                />
              </div>
              <div className="w-full py-2 lg:py-4">
                <span className="font-body text-sm font-bold">Password:</span>
                <Input
                  hint="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                  className="py-2"
                  type="password"
                  isInvalid={isPasswordIncorrect}
                  errorText="la password inserita non è corretta"
                />
              </div>
            </div>
            <div className="w-full flex flex-col justify-around items-center my-2 lg:my-4">
              <Button
                className="w-full py-3 my-2"
                onClick={() => {
                  setIsEmailValid(validation.VALID);
                  if (email === '') {
                    setIsEmailValid(validation.EMPTY);
                    return;
                  }

                  if (password === '') {
                    setIsPasswordIncorrect(validation.EMPTY);
                    return;
                  }
                  loginWithEmail(email, password);
                }}
              >
                <span>ACCEDI</span>
              </Button>
              <GoogleButton
                action="login"
                className="w-full my-2"
                onClick={authenticateWithGoogle}
              />
            </div>
          </div>
          <span className="font-body text-sm my-2 justify-self-end">
            Non hai un account?{' '}
            <Link className="text-primary-main" href="/signup">
              REGISTRATI
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default login;
