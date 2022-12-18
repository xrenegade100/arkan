import React from "react";
import Image from 'next/image'
import Link from "next/link";

const Navbar: React.FC = () => {
  return(
    <div className="w-full h-14 bg-primary-main shadow-md">
      <div className="h-full mx-8 flex justify-between items-center">
        <div className="w-full h-full flex justify-start items-center">
        <span className="material-symbols-rounded md-36 text-white hover:cursor-pointer">
          menu
        </span>
        </div>
        <Link href='/' className="h-fit w-fit hover:cursor-pointer">
          <Image src='/logo.png' alt='Arkan' width={160} height={50} priority/>
        </Link>
        <div className="w-full h-full invisible flex justify-end items-center md:visible">
            <Link href='/' className="h-full">
              <span className="w-0 md:w-fit h-full flex items-center justify-center bg-transparent px-2 font-body text-xl font-bold text-white hover:bg-secondary-main hover:cursor-pointer transition-colors">SEGNALA</span>
            </Link>
            <Link href='/' className="h-full">
              <span className="w-0 md:w-fit h-full flex items-center justify-center bg-transparent px-2 font-body text-xl font-bold text-white transition-colors hover:bg-secondary-main hover:cursor-pointer">HOS</span>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;