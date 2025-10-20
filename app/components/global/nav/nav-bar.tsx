"use client";

import Image from "next/image";
import Link from "next/link";
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
    LogOutIcon,
    ChevronLeft,
    ChevronRight,
    CalendarIcon

} from "lucide-react";
import { usePathname } from "next/navigation";
import { useNavbar } from "../../contexts/navbar-context";

const NavBar = () => {
    const { isOpen, toggleNavbar } = useNavbar();
    const pathname = usePathname();
    const [userProfile, setUserProfile] = React.useState({
        name: "Anna Kowalska",
        email: "anna.kowalska@email.com", 
    });
    const menuItems = [
        {
            name: "Start",
            icon: <HomeIcon className="w-5 h-5" />,
            href: "/",
            badge: null,
        },
        {
            name: "Moje Dziecko",
            icon: <UserIcon className="w-5 h-5" />,
            href: "/dziecko",
            badge: null,
        },
        {
            name: "Wydarzenia",
            icon: <CalendarIcon className="w-5 h-5" />,
            href: "/wydarzenia",
            badge: null,
        },
        {
            name: "Wiadomości",
            icon: <MessageSquareIcon className="w-5 h-5" />,
            href: "/wiadomosci",
            badge: 3,
        },
        {
            name: "Dokumenty",
            icon: <FileTextIcon className="w-5 h-5" />,
            href: "/dokumenty",
            badge: null,
        },
        {
            name: "Galeria",
            icon: <CameraIcon className="w-5 h-5" />,
            href: "/galeria",
            badge: 12,
        },
        {
            name: "Jadłospis",
            icon: <UtensilsIcon className="w-5 h-5" />,
            href: "/jadlospis",
            badge: null,
        },
        {
            name: "Płatności",
            icon: <CreditCardIcon className="w-5 h-5" />,
            href: "/platnosci",
            badge: 2,
        },
    ];
    
    return (
        <div className={`${isOpen ? "w-[280px]" : "w-[80px]"} h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 transition-all duration-300 flex flex-col fixed top-0 left-0 z-40 shadow-xl border-r border-gray-200 dark:border-gray-700`}>
            <div className={`relative w-full bg-gradient-to-br from-[#005FA6] via-[#4A9FD1] to-[#005FA6] h-[140px] flex flex-col items-center justify-center p-6 shadow-lg ${isOpen ? '' : 'px-4'}`}>
                <button
                    onClick={toggleNavbar}
                    className="absolute inset-y-0 right-4 h-fit my-auto p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors backdrop-blur-sm"
                >
                    {isOpen ? (
                        <ChevronLeft className="w-5 h-5 text-white cursor-pointer" />
                    ) : (
                        <ChevronRight className="w-5 h-5 text-white cursor-pointer" />
                    )}
                </button>
                
                {isOpen ? (
                    <div className="flex flex-col items-center gap-3">
                        <div className="relative">
                            <Image 
                                src="/logo_szkoly.png" 
                                alt="logo" 
                                width={60} 
                                height={60} 
                                className="w-[60px] h-[60px] bg-white rounded-full shadow-lg ring-4 ring-white/50" 
                            />
                        </div>
                        <h1 className="text-white text-sm font-bold text-center leading-tight">
                            Przedszkole nr 14<br />
                            <span className="text-xs font-normal text-white/90">"Biały Żagiel"</span>
                        </h1>
                    </div>
                ) : (
                    null
                )}
            </div>

            <nav className="flex-1 overflow-y-auto py-4 px-3">
                <div className="space-y-1">
                    {menuItems.map((item, index) => {
                        const isActive = pathname === item.href;
                        return isOpen ? (
                            <Link 
                                key={index} 
                                href={item.href} 
                                className={`group relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                                    isActive 
                                        ? 'bg-[#005FA6] text-white shadow-lg shadow-[#005FA6]/30' 
                                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-[#005FA6]'
                                }`}
                            >
                                <div className={`${isActive ? 'text-white' : 'text-gray-500 dark:text-gray-400 group-hover:text-[#005FA6]'}`}>
                                    {item.icon}
                                </div>
                                <span className="font-medium text-sm">{item.name}</span>
                                {item.badge && (
                                    <span className={`ml-auto text-xs font-semibold px-2 py-0.5 rounded-full ${
                                        isActive 
                                            ? 'bg-white text-[#005FA6]' 
                                            : 'bg-red-500 text-white'
                                    }`}>
                                        {item.badge}
                                    </span>
                                )}
                            </Link>
                        ) : (
                            <Link 
                                key={index} 
                                href={item.href} 
                                className={`group relative flex items-center justify-center p-3 rounded-xl transition-all duration-200 ${
                                    isActive 
                                        ? 'bg-[#005FA6] text-white shadow-lg' 
                                        : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-[#005FA6]'
                                }`}
                                title={item.name}
                            >
                                {item.icon}
                                {item.badge && (
                                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                                        {item.badge}
                                    </span>
                                )}
                            </Link>
                        );
                    })}
                </div>
            </nav>

            <div className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <div className={`p-4 ${isOpen ? '' : 'flex justify-center'}`}>
                    {isOpen ? (
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#005FA6] to-[#005FA6] flex items-center justify-center text-white font-bold shadow-md">
                                {userProfile.name.split(" ").map(n => n[0]).join("")}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                                    {userProfile.name}
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                                    {userProfile.email}
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <Link 
                                    href="/ustawienia" 
                                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors group"
                                    title="Ustawienia"
                                >
                                    <SettingsIcon className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-[#005FA6]" />
                                </Link>
                                <Link 
                                    href="/logowanie" 
                                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors group"
                                    title="logowanie"
                                >
                                    <LogOutIcon className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-red-500" />
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-2">
                            <Link 
                                href="/ustawienia" 
                                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                                title="Ustawienia"
                            >
                                <SettingsIcon className="w-5 h-5 text-gray-500 dark:text-gray-400 hover:text-[#005FA6]" />
                            </Link>
                            <Link 
                                href="/wyloguj" 
                                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                                title="Wyloguj"
                            >
                                <LogOutIcon className="w-5 h-5 text-gray-500 dark:text-gray-400 hover:text-red-500" />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default NavBar;