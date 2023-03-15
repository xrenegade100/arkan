/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { NextPage } from 'next';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Typewriter, { TypewriterClass } from 'typewriter-effect';
import Button from '../components/Button';
import GoogleButton from '../components/GoogleButton';
import Input from '../components/Input';
import {
  validateEmail,
  validatePassword,
  validateUsername,
  validateIsPasswordEqualToConfirmPassword,
  validation,
} from '../Helpers/CredentialsValidation';
import { useAuth } from '../hook/useAuth';
import Popup from '../components/Popup';

const signup: NextPage = () => {
  // value variables
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { singinWithEmail, authenticateWithGoogle, firebaseError } = useAuth();

  // validation variables
  const [isEmailValid, setIsEmailValid] = useState(validation.VALID);
  const [isPasswordValid, setIsPasswordValid] = useState(validation.VALID);
  const [
    isConfirmPasswordEqualToPassword,
    setIsConfirmPasswordEqualToPassword,
  ] = useState(validation.VALID);
  const [isUsernameValid, setIsUsernameValid] = useState(validation.VALID);

  // show/hide button loading spinner
  const [isLoading, setIsLoading] = useState(false);

  // popup visiblity
  const [userAlreadyExist, setUserAlreadyExist] = useState(false);

  useEffect(() => {
    if (firebaseError) {
      if (firebaseError.code === 'auth/email-already-in-use') {
        setIsLoading(false);
        setUserAlreadyExist(true);
      }
    }
  }, [firebaseError]);

  const singIn = async () => {
    setIsEmailValid(validateEmail(email));
    if (validateEmail(email) !== validation.VALID) return;

    setIsUsernameValid(validateUsername(username));
    if (validateUsername(username) !== validation.VALID) return;

    setIsPasswordValid(validatePassword(password));
    if (validatePassword(password) !== validation.VALID) return;

    setIsConfirmPasswordEqualToPassword(
      validateIsPasswordEqualToConfirmPassword(password, confirmPassword),
    );
    if (
      // eslint-disable-next-line operator-linebreak
      validateIsPasswordEqualToConfirmPassword(password, confirmPassword) !==
      validation.VALID
    ) {
      return;
    }

    setIsLoading(true);
    singinWithEmail(email, username, password);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-white to-secondary-accent">
      <div className="w-10/12 h-5/6 lg:w-3/4 lg:h-5/6  flex justify-center items-center rounded-xl shadow-xl overflow-hidden">
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
            Registrati
          </span>
          <div className="w-10/12 lg:w-9/12 2xl:w-7/12 flex flex-col justify-center items-center">
            <div className="w-full flex flex-col justify-center items-center xl:my-4">
              <div className="w-full xl:py-2">
                <span className="font-body text-sm font-bold">Email:</span>
                <Input
                  hint="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="xl:py-1 2xl:py-2"
                  value={email}
                  errorText="l'email inserita non è valida"
                  isInvalid={isEmailValid}
                  disabled={userAlreadyExist}
                />
              </div>
              <div className="w-full xl:py-2">
                <span className="font-body text-sm font-bold">Username:</span>
                <Input
                  hint="username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  className="xl:py-1 2xl:py-2"
                  value={username}
                  isInvalid={isUsernameValid}
                  disabled={userAlreadyExist}
                />
              </div>
              <div className="w-full xl:py-2">
                <span className="font-body text-sm font-bold">Password:</span>
                <Input
                  hint="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                  className="xl:py-1 2xl:py-2"
                  type="password"
                  errorText="Attenzione! la password deve avere almeno 8 caratteri, almeno una lettera maiuscola, un numero ed un carattere speciale"
                  isInvalid={isPasswordValid}
                  disabled={userAlreadyExist}
                />
              </div>
              <div className="w-full py-1 xl:py-2">
                <span className="font-body text-sm font-bold">
                  Conferma Password:
                </span>
                <Input
                  hint="conferma password"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  value={confirmPassword}
                  className="xl:py-1 2xl:py-2"
                  type="password"
                  errorText="Attenzione! i campi password e conferma password devono essere uguali"
                  isInvalid={isConfirmPasswordEqualToPassword}
                  disabled={userAlreadyExist}
                />
              </div>
            </div>
          </div>
          <div className="w-10/12 lg:w-9/12 2xl:w-7/12 flex flex-col justify-around items-center my-2 xl:my-4">
            <Button
              className="w-full py-2 xl:py-3 my-2"
              onClick={singIn}
              isLoading={isLoading}
              disabled={userAlreadyExist}
            >
              <span>REGISTRATI</span>
            </Button>
            <GoogleButton
              action="signup"
              className="w-full my-2"
              onClick={authenticateWithGoogle}
              disabled={userAlreadyExist}
            />
          </div>
          <span className="font-body text-sm my-2 justify-self-end">
            Hai già un account?{' '}
            <Link className="text-primary-main" href="/login">
              ACCEDI
            </Link>
          </span>
        </div>
      </div>
      <Popup
        message="Esiste già un account con questa email, prova ad effettuare l'accesso con la pagina di login"
        title="Attenzione!"
        isVisible={userAlreadyExist}
        onClick={() => setUserAlreadyExist(false)}
      />
    </div>
  );
};

export default signup;
