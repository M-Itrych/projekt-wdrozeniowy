"use client";

import Image from "next/image";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React from "react";

const NavBar = () => {
    const [isOpen, setIsOpen] = React.useState(true);
    return (
        <div className={`${isOpen ? "w-[300px]" : "w-[80px]"} h-screen bg-[#EEF1EE] transition-all duration-300`}>
            <div className="w-full flex flex-row bg-[#608858] h-[100px] gap-8 items-center py-4 px-2 justify-center">
                {isOpen ? <Image src="/logo_szkoly.png" alt="logo" width={40} height={40} className="w-[40px] h-[40px] bg-white rounded-full" /> : null}
                {isOpen ? <h1 className="text-white text-l font-bold text-center">Przedszkole nr14<br />"Biały Żagiel"</h1> : null}
                {isOpen 
                ? <ArrowBackIosIcon className="text-white text-3xl cursor-pointer" onClick={() => {setIsOpen(!isOpen)}}/> 
                : <ArrowForwardIosIcon className="text-white text-3xl cursor-pointer" onClick={() => {setIsOpen(!isOpen)}}/>
                }
            </div>
        </div>
    );

}

export default NavBar;