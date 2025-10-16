"use client";

import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Eye, EyeOff, Edit2, Trash2 } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
    DropdownMenuLabel,
    DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";

export default function Ustawienia() {
    const [showEmail, setShowEmail] = useState(false);
    const [showPhone, setShowPhone] = useState(false);
    const [notifications, setNotifications] = useState(true);
    const [language, setLanguage] = useState("pl");

    const userData = {
        email: "anna.kowalska@email.com",
        phone: "+48 123 456 789",
        address: "ul. Słoneczna 15, 00-001 Gdańsk"
    };

    const maskedEmail = userData.email.replace(/(.{3}).*(@.*)/, "$1****$2");
    const maskedPhone = userData.phone.replace(/(.{3}).*(.{4})/, "$1****$2");
    const [theme, setTheme] = useState("light");
    const [showOdbierzDziecko, setShowOdbierzDziecko] = useState(false);

    return (
        <div className="h-screen bg-gray-50 flex flex-col overflow-hidden ">
            <div className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Ustawienia</h1>
                        <p className="text-gray-600 mt-1">Zarządzaj swoim kontem i preferencjami</p>
                    </div>
                </div>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
                <div className="max-w-4xl mx-auto space-y-6">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Informacje osobiste</h2>
                        
                        <div className="space-y-6">
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div className="flex items-center gap-4 flex-1">
                                    <div className="p-2 bg-[#608858] rounded-lg">
                                        <Mail className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-600">Adres e-mail</p>
                                        <p className="text-base font-medium text-gray-900">
                                            {showEmail ? userData.email : maskedEmail}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => setShowEmail(!showEmail)}
                                        className="text-[#608858] hover:text-[#4a6b44] text-sm font-medium flex items-center gap-1 cursor-pointer"
                                    >
                                        {showEmail ? (
                                            <>
                                                <EyeOff className="w-4 h-4" />
                                                Ukryj
                                            </>
                                        ) : (
                                            <>
                                                <Eye className="w-4 h-4" />
                                                Pokaż
                                            </>
                                        )}
                                    </button>
                                    <Button variant="outline" size="sm" className="ml-2 cursor-pointer">
                                        <Edit2 className="w-4 h-4 mr-1" />
                                        Edytuj
                                    </Button>
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div className="flex items-center gap-4 flex-1">
                                    <div className="p-2 bg-[#608858] rounded-lg">
                                        <Phone className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-600">Numer telefonu</p>
                                        <p className="text-base font-medium text-gray-900">
                                            {showPhone ? userData.phone : maskedPhone}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => setShowPhone(!showPhone)}
                                        className="text-[#608858] hover:text-[#4a6b44] text-sm font-medium flex items-center gap-1 cursor-pointer"
                                    >
                                        {showPhone ? (
                                            <>
                                                <EyeOff className="w-4 h-4" />
                                                Ukryj
                                            </>
                                        ) : (
                                            <>
                                                <Eye className="w-4 h-4" />
                                                Pokaż
                                            </>
                                        )}
                                    </button>
                                    <Button variant="outline" size="sm" className="ml-2 cursor-pointer">
                                        <Trash2 className="w-4 h-4 mr-1" />
                                        Usuń
                                    </Button>
                                    <Button variant="outline" size="sm" className="ml-1 cursor-pointer">
                                        <Edit2 className="w-4 h-4 mr-1" />
                                        Edytuj
                                    </Button>
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div className="flex items-center gap-4 flex-1">
                                    <div className="p-2 bg-[#608858] rounded-lg">
                                        <MapPin className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-600">Adres zamieszkania</p>
                                        <p className="text-base font-medium text-gray-900">
                                            {userData.address}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 cursor-pointer">
                                    <Button variant="outline" size="sm" className="ml-2">
                                        <Edit2 className="w-4 h-4 mr-1" />
                                        Edytuj
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Preferencje</h2>
                        
                        <div className="space-y-6">
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div>
                                    <p className="text-base font-medium text-gray-900">Powiadomienia</p>
                                    <p className="text-sm text-gray-600">Otrzymuj powiadomienia o ważnych wydarzeniach</p>
                                </div>
                                <Switch 
                                    id="notifications" 
                                    checked={notifications}
                                    onCheckedChange={setNotifications}
                                    className="data-[state=checked]:bg-[#608858] cursor-pointer"
                                />
                            </div>
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div>
                                    <p className="text-base font-medium text-gray-900">Język interfejsu</p>
                                    <p className="text-sm text-gray-600">Wybierz język aplikacji</p>
                                </div>
                                <Select value={language} onValueChange={setLanguage}>
                                    <SelectTrigger className="w-32 cursor-pointer">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem className="cursor-pointer data-[highlighted]:bg-[#608858] data-[highlighted]:text-white focus:bg-[#608858] focus:text-white " value="pl">Polski</SelectItem>
                                        <SelectItem className="cursor-pointer data-[highlighted]:bg-[#608858] data-[highlighted]:text-white focus:bg-[#608858] focus:text-white " value="en">English</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div>
                                    <p className="text-base font-medium text-gray-900">Wybór motywu</p>
                                    <p className="text-sm text-gray-600">Wybierz kolor motywu</p>
                                </div>
                                <Select value={theme} onValueChange={setTheme}>
                                    <SelectTrigger className="w-32">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="light">Jasny</SelectItem>
                                        <SelectItem value="dark">Ciemny</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Wybierz szybkie akcje</h2>
                        
                        <div className="space-y-6">
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div>
                                    <p className="text-base font-medium text-gray-900">Szybkie akcje</p>
                                    <p className="text-sm text-gray-600">Wybierz akcję wyświetlaną na pasku bocznym</p>
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
                                            className="cursor-pointer data-[highlighted]:bg-[#608858] data-[highlighted]:text-white focus:bg-[#608858] focus:text-white "
                                        >
                                            Odbierz dziecko
                                        </DropdownMenuCheckboxItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end cursor-pointer w-fit justify-self-end">
                        <Button className="bg-[#608858] hover:bg-[#4a6b44] text-white px-6 cursor-pointer">
                            Zapisz zmiany
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}