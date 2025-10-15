"use client";

import Image from "next/image";
import Link from "next/link";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React from "react";
import { 
    HomeIcon,  
    UserIcon, 
    MessageSquareIcon, 
    FileTextIcon, 
    CameraIcon, 
    CreditCardIcon,
    SettingsIcon,
    UtensilsIcon,
    LogOutIcon
} from "lucide-react";
import { usePathname } from "next/navigation";

const NavBar = () => {
    const [isOpen, setIsOpen] = React.useState(true);
    const pathname = usePathname();
    const [userProfile, setUserProfile] = React.useState({
        name: "Anna Kowalska",
        email: "anna.kowalska@email.com", 
    });
    const menuItems = [
        {
            name: "Start",
            icon: <HomeIcon />,
            href: "/",
        },
        {
            name: "Moje Dziecko",
            icon: <UserIcon />,
            href: "/dziecko",
        },
        {
            name: "Wiadomości",
            icon: <MessageSquareIcon />,
            href: "/wiadomosci",
        },
        {
            name: "Dokumenty",
            icon: <FileTextIcon />,
            href: "/dokumenty",
        },
        {
            name: "Galeria",
            icon: <CameraIcon />,
            href: "/galeria",
        },
        {
            name: "Jadłospis",
            icon: <UtensilsIcon />,
            href: "/jadlospis",
        },
        {
            name: "Płatności",
            icon: <CreditCardIcon />,
            href: "/platnosci",
        },
    ];
    return (
        <div className={`${isOpen ? "w-[500px] max-w-[500px]" : "w-[80px] max-w-[80px]"} h-screen bg-[#EEF1EE] transition-all duration-300 flex flex-col position-sticky top-0 left-0`}>
            <div className={`w-full flex flex-row bg-[#608858] h-[100px] gap-8 items-center py-4 px-8 ${isOpen ? 'justify-between' : 'justify-center'}`}>
                {isOpen ? <Image src="/logo_szkoly.png" alt="logo" width={40} height={40} className="w-[40px] h-[40px] bg-white rounded-full" /> : null}
                {isOpen ? <h1 className="text-white text-l font-bold text-center">Przedszkole nr14<br />"Biały Żagiel"</h1> : null}
                {isOpen 
                ? <ArrowBackIosIcon className="text-white text-3xl cursor-pointer" onClick={() => {setIsOpen(!isOpen)}}/> 
                : <ArrowForwardIosIcon className="text-white text-3xl cursor-pointer" onClick={() => {setIsOpen(!isOpen)}}/>
                }
            </div>
            <div className="flex-1 flex flex-col gap-2 py-2">
                {menuItems.map((item, index) => {
                    const isActive = pathname === item.href;
                    return isOpen ? (
                        <Link key={index} href={item.href} className={`w-full flex flex-row gap-2 items-center px-4 hover:bg-white p-2 cursor-pointer ${isActive ? 'bg-white shadow-md font-bold' : ''}`}>
                            {item.icon}
                            {item.name}
                        </Link>
                    ) : (
                        <Link key={index} href={item.href} className={`w-full flex flex-row gap-2 items-center justify-center hover:bg-white p-2 cursor-pointer ${isActive ? 'bg-white shadow-md font-bold' : ''}`}>
                            {item.icon}
                        </Link>
                    );
                })}
            </div>
            <div className="w-full border-t border-gray-300">
                <div className={`w-full flex flex-row gap-3 items-center p-3 hover:bg-white cursor-pointer ${isOpen ? 'px-4' : 'justify-center'}`}>
                    {isOpen && (
                        <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-gray-900 truncate">
                                {userProfile.name}
                            </div>
                            <div className="text-xs text-gray-500 truncate">
                                {userProfile.email}
                            </div>
                        </div>
                    )}
                    {isOpen && (
                        <div className="flex gap-1">
                            <Link href="/ustawienia" className="p-1 hover:bg-gray-100 rounded">
                                <SettingsIcon className="w-4 h-4 text-gray-500 hover:text-gray-700" />
                            </Link>
                            <Link href="/wyloguj" className="p-1 hover:bg-gray-100 rounded">
                                <LogOutIcon className="w-4 h-4 text-gray-500 hover:text-gray-700" />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

}

export default NavBar;