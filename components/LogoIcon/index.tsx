import React from 'react';
import Image from 'next/image';
import Logo from './logo.svg';

export interface LogoIconProps {
  size:
    | 'base'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl';
}

const LogoIcon: React.FC<LogoIconProps> = ({ size }: LogoIconProps) => {
  let width: string;
  let height: string;

  switch (size) {
    case 'base': {
      width = '60';
      height = '60';
      break;
    }
    case 'xl': {
      width = '80';
      height = '80';
      break;
    }
    case '2xl': {
      width = '100';
      height = '100';
      break;
    }
    case '3xl': {
      width = '120';
      height = '120';
      break;
    }
    case '4xl': {
      width = '150';
      height = '150';
      break;
    }
    case '5xl': {
      width = '180';
      height = '180';
      break;
    }
    case '6xl': {
      width = '210';
      height = '210';
      break;
    }
    case '7xl': {
      width = '240';
      height = '240';
      break;
    }
    case '8xl': {
      width = '270';
      height = '270';
      break;
    }
    case '9xl': {
      width = '300';
      height = '300';
      break;
    }
  }

  return <Image src={Logo} alt='logo' width={width} height={height}></Image>;
};

export default LogoIcon;
