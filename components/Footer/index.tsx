import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";

const Footer: React.FC = () => {
    return(
        <div className="w-full bg-primary-main flex flex-col justify-between items-center py-8">
            <div className="flex flex-col justify-center items-center">
                <img src='/logo.png' className="w-40" />
                <span className="font-logo text-secondary-main text-3xl">Dark Pattern Risk Evaluation</span>
            </div>
            <div className="flex justify-center items-center mt-12">
              <Link href={''} className="w-6 mx-2">
                <FontAwesomeIcon color="#fff" size="2x" icon={faFacebook} />
              </Link>
              <Link href={''} className="w-6 mx-2">
                <FontAwesomeIcon color="#fff" size="2x" icon={faInstagram} />
              </Link>
              <Link href={''} className="w-6 mx-2">
                <FontAwesomeIcon color="#fff" size="2x" icon={faGithub} />
              </Link>
            </div>
            <span className="mt-40 font-body text-sm text-white">©2023 MANTRACODING</span>
        </div>
    )
}

export default Footer;