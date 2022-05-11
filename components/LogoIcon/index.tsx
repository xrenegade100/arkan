import React from 'react';
import Image from 'next/image';
import Logo from './logo.svg';

export interface LogoIconProps {
  size: 'base' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  onClick?: () => void;
  href?: string;
}

const LogoIcon = React.forwardRef(
  ({ size, onClick, href }: LogoIconProps, ref) => {
    let width: string;
    let height: string;

    switch (size) {
      case 'base': {
        width = '80';
        height = '70';
        break;
      }
      case 'xl': {
        width = '188';
        height = '97';
        break;
      }
      case '2xl': {
        width = '218';
        height = '127';
        break;
      }
      case '3xl': {
        width = '248';
        height = '157';
        break;
      }
      case '4xl': {
        width = '278';
        height = '187';
        break;
      }
      case '5xl': {
        width = '308';
        height = '217';
        break;
      }
      case '6xl': {
        width = '338';
        height = '247';
        break;
      }
    }

    return (
      <a href={href} onClick={onClick}>
        <Image src={Logo} alt='logo' width={width} height={height} />
      </a>
    );
  }
);

LogoIcon.displayName = 'LogoIcon';

export default LogoIcon;
