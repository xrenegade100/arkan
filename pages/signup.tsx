/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { NextPage } from 'next';
import Link from 'next/link';
import React, { useState } from 'react';
import Typewriter, { TypewriterClass } from 'typewriter-effect';
import Button from '../components/Button';
import GoogleButton from '../components/GoogleButton';
import Input from '../components/Input';

const signup: NextPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
            Registrati
          </span>
          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full flex flex-col justify-center items-center lg:my-4">
              <div className="w-3/4 lg:w-2/4 lg:py-4">
                <span className="font-body text-sm font-bold">Username:</span>
                <Input
                  hint="username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  className="py-2"
                  value={username}
                />
              </div>
              <div className="w-3/4 lg:w-2/4 pt-2 lg:py-4">
                <span className="font-body text-sm font-bold">Password:</span>
                <Input
                  hint="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                  className="py-2"
                  type="password"
                />
              </div>
              <div className="w-3/4 lg:w-2/4 py-2 lg:py-4">
                <span className="font-body text-sm font-bold">
                  Conferma Password:
                </span>
                <Input
                  hint="conferma password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                  className="py-2"
                  type="password"
                />
              </div>
            </div>
            <div className="w-3/4 lg:w-2/4 flex flex-col justify-around items-center my-2 lg:my-4">
              <Button className="w-full py-3 my-2">
                <span>REGISTRATI</span>
              </Button>
              <GoogleButton action="signup" className="w-full my-2" />
            </div>
          </div>
          <span className="font-body text-sm my-2 justify-self-end">
            Hai già un account?{' '}
            <Link className="text-primary-main" href="/login">
              ACCEDI
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default signup;
