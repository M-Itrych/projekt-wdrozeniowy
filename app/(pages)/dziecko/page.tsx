"use client"

import React from "react";
import { User, Calendar } from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

export default function MojeDziecko() {
    const [activeTab, setActiveTab] = React.useState<string>("dane")


    const attendanceHistory = [
        {
            id: 1,
            date: "20.10.2025",
            entryTime: "07:30",
            exitTime: "16:00",
            present: true
        },
        {
            id: 2,
            date: "19.10.2025",
            entryTime: "-",
            exitTime: "-",
            present: false,
            reason: "choroba"
        },
        {
            id: 3,
            date: "18.10.2025",
            entryTime: "08:15",
            exitTime: "15:30",
            present: true
        },
        {
            id: 4,
            date: "17.10.2025",
            entryTime: "07:45",
            exitTime: "16:15",
            present: true
        },
        {
            id: 5,
            date: "16.10.2025",
            entryTime: "-",
            exitTime: "-",
            present: false,
            reason: "wakacje"
        },
        {
            id: 6,
            date: "15.10.2025",
            entryTime: "08:00",
            exitTime: "15:45",
            present: true
        },
        {
            id: 7,
            date: "14.10.2025",
            entryTime: "07:50",
            exitTime: "16:20",
            present: true
        },
        {
            id: 8,
            date: "13.10.2025",
            entryTime: "-",
            exitTime: "-",
            present: false,
            reason: "choroba"
        }
    ]

    const menuButtons = [
        {
            id: "dane",
            title: "Dane osobowe",
            icon: User,
            description: "Informacje podstawowe o dziecku"
        },
        {
            id: "frekwencja",
            title: "Frekwencja",
            icon: Calendar,
            description: "Historia obecności w przedszkolu"
        }
    ]

    const renderTabContent = () => {
        switch (activeTab) {
            case "dane":
                return (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Dane podstawowe</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Imię i nazwisko:</span>
                                        <span className="font-semibold">Zosia Kowalska</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Data urodzenia:</span>
                                        <span className="font-semibold">15.03.2020</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Grupa:</span>
                                        <span className="font-semibold text-[#608858]">Motylki</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">PESEL:</span>
                                        <span className="font-semibold">20031512345</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Kontakt</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Adres:</span>
                                        <span className="font-semibold text-right max-w-xs">
                                            ul. Słoneczna 15<br />
                                            00-001 Warszawa
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Telefon:</span>
                                        <span className="font-semibold">+48 123 456 789</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Opiekunowie</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="border border-gray-200 rounded-lg p-4">
                                    <h4 className="font-medium text-gray-900 mb-2">Opiekun 1</h4>
                                    <div className="space-y-1 text-sm">
                                        <div className="text-gray-600">Anna Kowalska</div>
                                        <div className="text-gray-600">+48 123 456 789</div>
                                        <div className="text-gray-600">anna.kowalska@email.com</div>
                                    </div>
                                </div>
                                <div className="border border-gray-200 rounded-lg p-4">
                                    <h4 className="font-medium text-gray-900 mb-2">Opiekun 2</h4>
                                    <div className="space-y-1 text-sm">
                                        <div className="text-gray-600">Piotr Kowalski</div>
                                        <div className="text-gray-600">+48 987 654 321</div>
                                        <div className="text-gray-600">piotr.kowalski@email.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            case "frekwencja":
                return (
                    <div className="space-y-6">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Podsumowanie frekwencji</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <div className="text-center p-4 bg-green-50 rounded-lg">
                                    <div className="text-2xl font-bold text-green-600">85%</div>
                                    <div className="text-sm text-gray-600">Frekwencja ogółem</div>
                                </div>
                                <div className="text-center p-4 bg-blue-50 rounded-lg">
                                    <div className="text-2xl font-bold text-blue-600">18</div>
                                    <div className="text-sm text-gray-600">Dni obecne</div>
                                </div>
                                <div className="text-center p-4 bg-red-50 rounded-lg">
                                    <div className="text-2xl font-bold text-red-600">3</div>
                                    <div className="text-sm text-gray-600">Dni nieobecne</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="px-6 py-4 border-b border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900">Historia obecności</h3>
                            </div>
                            <div className="overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Data obecności</TableHead>
                                            <TableHead>Godzina wejścia</TableHead>
                                            <TableHead>Godzina odbioru</TableHead>
                                            <TableHead>Status</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {attendanceHistory.map((record) => (
                                            <TableRow key={record.id}>
                                                <TableCell className="font-medium">{record.date}</TableCell>
                                                <TableCell className={record.present ? "text-gray-900" : "text-gray-400"}>
                                                    {record.entryTime}
                                                </TableCell>
                                                <TableCell className={record.present ? "text-gray-900" : "text-gray-400"}>
                                                    {record.exitTime}
                                                </TableCell>
                                                <TableCell>
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                                        record.present 
                                                            ? 'bg-green-100 text-green-800' 
                                                            : 'bg-red-100 text-red-800'
                                                    }`}>
                                                        {record.present ? 'TAK' : 'NIE'}
                                                    </span>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    </div>
                )
            default:
                return null
        }
    }

    return (
        <div className="w-full h-screen bg-gray-50 flex flex-col overflow-hidden">
            <div className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Moje dziecko</h1>
                        <div className="mt-2">
                            <h2 className="text-xl font-semibold text-[#608858]">Zosia Kowalska</h2>
                            <p className="text-sm text-gray-500 mt-1">
                                Grupa: <span className="font-medium text-gray-700">Motylki</span>
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="flex gap-2">
                    {menuButtons.map((button) => {
                        const IconComponent = button.icon
                        return (
                            <button
                                key={button.id}
                                onClick={() => setActiveTab(button.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                                    activeTab === button.id
                                        ? "bg-[#608858] text-white shadow-md"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                            >
                                <IconComponent className="w-4 h-4" />
                                <span className="font-medium">{button.title}</span>
                            </button>
                        )
                    })}
                </div>
            </div>

            <div className="flex-1 p-6 overflow-y-auto">
                {renderTabContent()}
            </div>
        </div>
    );
}
