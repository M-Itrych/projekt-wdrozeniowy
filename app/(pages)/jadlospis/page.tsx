"use client"

import React from "react";
import { Calendar, Clock, Utensils, Apple, Coffee, Heart } from "lucide-react";

const Jadlospis = () => {
    const [selectedWeek, setSelectedWeek] = React.useState<number>(1);
    
    const weeks = [
        {
            id: 1,
            label: "Tydzień 1",
            days: [
                {
                    day: "Poniedziałek",
                    date: "14.10.2025",
                    meals: [
                        { type: "Śniadanie", time: "08:00", name: "Płatki owsiane z mlekiem i owocami", icon: <Apple className="w-4 h-4" /> },
                        { type: "II Śniadanie", time: "10:00", name: "Kanapka z serem i pomidorem", icon: <Coffee className="w-4 h-4" /> },
                        { type: "Obiad", time: "12:00", name: "Zupa pomidorowa, kotlet schabowy z ziemniakami", icon: <Utensils className="w-4 h-4" /> },
                        { type: "Podwieczorek", time: "15:00", name: "Jogurt naturalny z granolą", icon: <Heart className="w-4 h-4" /> }
                    ]
                },
                {
                    day: "Wtorek",
                    date: "15.10.2025",
                    meals: [
                        { type: "Śniadanie", time: "08:00", name: "Tosty z dżemem i herbata", icon: <Apple className="w-4 h-4" /> },
                        { type: "II Śniadanie", time: "10:00", name: "Owoce sezonowe", icon: <Coffee className="w-4 h-4" /> },
                        { type: "Obiad", time: "12:00", name: "Barszcz czerwony, pierogi z mięsem", icon: <Utensils className="w-4 h-4" /> },
                        { type: "Podwieczorek", time: "15:00", name: "Ciasto drożdżowe", icon: <Heart className="w-4 h-4" /> }
                    ]
                },
                {
                    day: "Środa",
                    date: "16.10.2025",
                    meals: [
                        { type: "Śniadanie", time: "08:00", name: "Owsianka z bananem", icon: <Apple className="w-4 h-4" /> },
                        { type: "II Śniadanie", time: "10:00", name: "Bułka z masłem", icon: <Coffee className="w-4 h-4" /> },
                        { type: "Obiad", time: "12:00", name: "Rosół z makaronem, ryba z warzywami", icon: <Utensils className="w-4 h-4" /> },
                        { type: "Podwieczorek", time: "15:00", name: "Kefir z miodem", icon: <Heart className="w-4 h-4" /> }
                    ]
                },
                {
                    day: "Czwartek",
                    date: "17.10.2025",
                    meals: [
                        { type: "Śniadanie", time: "08:00", name: "Jajecznica z pieczywem", icon: <Apple className="w-4 h-4" /> },
                        { type: "II Śniadanie", time: "10:00", name: "Warzywa pokrojone", icon: <Coffee className="w-4 h-4" /> },
                        { type: "Obiad", time: "12:00", name: "Zupa jarzynowa, spaghetti bolognese", icon: <Utensils className="w-4 h-4" /> },
                        { type: "Podwieczorek", time: "15:00", name: "Owocowy koktajl", icon: <Heart className="w-4 h-4" /> }
                    ]
                },
                {
                    day: "Piątek",
                    date: "18.10.2025",
                    meals: [
                        { type: "Śniadanie", time: "08:00", name: "Pancakes z syropem", icon: <Apple className="w-4 h-4" /> },
                        { type: "II Śniadanie", time: "10:00", name: "Serek homogenizowany", icon: <Coffee className="w-4 h-4" /> },
                        { type: "Obiad", time: "12:00", name: "Żurek, naleśniki z serem", icon: <Utensils className="w-4 h-4" /> },
                        { type: "Podwieczorek", time: "15:00", name: "Galaretka owocowa", icon: <Heart className="w-4 h-4" /> }
                    ]
                }
            ]
        }
    ];

    const currentWeek = weeks.find(week => week.id === selectedWeek);

    return (
        <div className="h-screen bg-gray-50 flex flex-col overflow-hidden">
            <div className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Jadłospis</h1>
                        <p className="text-sm text-gray-500 mt-1">
                            Menu tygodniowe przedszkola
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <button 
                            onClick={() => setSelectedWeek(1)}
                            className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 shadow-md ${
                                selectedWeek === 1 
                                    ? 'bg-[#608858] text-white' 
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        >
                            <Calendar className="w-4 h-4" />
                            Tydzień 1
                        </button>
                        <button 
                            onClick={() => setSelectedWeek(2)}
                            className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 shadow-md ${
                                selectedWeek === 2 
                                    ? 'bg-[#608858] text-white' 
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        >
                            <Calendar className="w-4 h-4" />
                            Tydzień 2
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex-1 p-6 overflow-y-auto">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    {currentWeek?.days.map((day, dayIndex) => (
                        <div key={dayIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="bg-[#608858] text-white px-4 py-3">
                                <h3 className="font-semibold text-lg">{day.day}</h3>
                                <p className="text-sm opacity-90">{day.date}</p>
                            </div>
                            <div className="p-4 space-y-4">
                                {day.meals.map((meal, mealIndex) => (
                                    <div key={mealIndex} className="border-b border-gray-100 pb-3 last:border-b-0">
                                        <div className="flex items-center gap-2 mb-2">
                                            {meal.icon}
                                            <span className="font-medium text-sm text-[#608858]">{meal.type}</span>
                                            <span className="text-xs text-gray-500 ml-auto">
                                                <Clock className="w-3 h-3 inline mr-1" />
                                                {meal.time}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-700 leading-relaxed">{meal.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Informacje o jadłospisie</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-medium text-gray-900 mb-2">Zasady żywienia</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Posiłki przygotowywane są na miejscu</li>
                                <li>• Uwzględniane są alergie i nietolerancje</li>
                                <li>• Używamy świeżych, sezonowych produktów</li>
                                <li>• Menu zatwierdzone przez dietetyka</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium text-gray-900 mb-2">Kontakt</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Kuchnia: (123) 456-789</li>
                                <li>• Intendent: anna.kowalska@przedszkole.pl</li>
                                <li>• Godziny: 7:00 - 16:00</li>
                                <li>• Zmiany menu: z 3-dniowym wyprzedzeniem</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jadlospis;
