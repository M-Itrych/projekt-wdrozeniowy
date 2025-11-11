"use client";

import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
    DropdownMenuLabel,
    DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";

export default function Ustawienia() {
    const [notifications, setNotifications] = useState(true);
    const [language, setLanguage] = useState("pl");
    const { theme, setTheme } = useTheme();
    const [showOdbierzDziecko, setShowOdbierzDziecko] = useState(false);

    return (
        <div className="h-screen bg-gray-50 dark:bg-gray-900 flex flex-col overflow-hidden ">
            <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Ustawienia</h1>
                        <p className="text-gray-600 dark:text-gray-300 mt-1">Zarządzaj swoim kontem i preferencjami</p>
                    </div>
                </div>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
                <div className="max-w-4xl mx-auto space-y-6">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Preferencje</h2>
                        
                        <div className="space-y-6">
                            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <div>
                                    <p className="text-base font-medium text-gray-900 dark:text-white">Powiadomienia</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">Otrzymuj powiadomienia o ważnych wydarzeniach</p>
                                </div>
                                <Switch 
                                    id="notifications" 
                                    checked={notifications}
                                    onCheckedChange={setNotifications}
                                    className="data-[state=checked]:bg-[#005FA6] cursor-pointer"
                                />
                            </div>
                            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <div>
                                    <p className="text-base font-medium text-gray-900 dark:text-white">Język interfejsu</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">Wybierz język aplikacji</p>
                                </div>
                                <Select value={language} onValueChange={setLanguage}>
                                    <SelectTrigger className="w-32 cursor-pointer">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem className="cursor-pointer data-[highlighted]:bg-[#005FA6] data-[highlighted]:text-white focus:bg-[#005FA6] focus:text-white " value="pl">Polski</SelectItem>
                                        <SelectItem className="cursor-pointer data-[highlighted]:bg-[#005FA6] data-[highlighted]:text-white focus:bg-[#005FA6] focus:text-white " value="en">English</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <div>
                                    <p className="text-base font-medium text-gray-900 dark:text-white">Wybór motywu</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">Wybierz kolor motywu</p>
                                </div>
                                <Select value={theme} onValueChange={(value) => setTheme(value)}>
                                    <SelectTrigger className="w-32 cursor-pointer">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem className="cursor-pointer data-[highlighted]:bg-[#005FA6] data-[highlighted]:text-white focus:bg-[#005FA6] focus:text-white" value="light">Jasny</SelectItem>
                                        <SelectItem className="cursor-pointer data-[highlighted]:bg-[#005FA6] data-[highlighted]:text-white focus:bg-[#005FA6] focus:text-white" value="dark">Ciemny</SelectItem>
                                        <SelectItem className="cursor-pointer data-[highlighted]:bg-[#005FA6] data-[highlighted]:text-white focus:bg-[#005FA6] focus:text-white" value="system">System</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Wybierz szybkie akcje</h2>
                        
                        <div className="space-y-6">
                            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <div>
                                    <p className="text-base font-medium text-gray-900 dark:text-white">Szybkie akcje</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">Wybierz akcję wyświetlaną na pasku bocznym</p>
                                </div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline" className="w-48 cursor-pointer">
                                            { "Wybierz szybką akcję"}
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-48">
                                        <DropdownMenuLabel>Wybierz szybką akcję</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuCheckboxItem
                                            onSelect={(e) => e.preventDefault()}
                                            checked={showOdbierzDziecko}
                                            onCheckedChange={setShowOdbierzDziecko}
                                            className="cursor-pointer data-[highlighted]:bg-[#005FA6] data-[highlighted]:text-white focus:bg-[#005FA6] focus:text-white "
                                        >
                                            Odbierz dziecko
                                        </DropdownMenuCheckboxItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end cursor-pointer w-fit justify-self-end">
                        <Button className="bg-[#005FA6] hover:bg-[#005FA6] text-white px-6 cursor-pointer">
                            Zapisz zmiany
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}