"use client";

import React, { useState } from "react";
import {
  Calendar as CalendarIcon,
  MapPin,
  Clock,
  Users,
  ChevronLeft,
  ChevronRight,
  Star,
  PartyPopper,
  Camera,
  Music,
  Utensils,
  BookOpen,
} from "lucide-react";
import { format, addDays, startOfWeek, isSameDay } from "date-fns";
import { pl } from "date-fns/locale";

interface Event {
  id: number;
  title: string;
  description: string;
  date: Date;
  time: string;
  location: string;
  category: "festiwal" | "wycieczka" | "urodziny" | "przedstawienie" | "zajęcia" | "inne";
  participants?: string;
  color: string;
  icon: React.ElementType;
}

const mockEvents: Event[] = [
  {
    id: 1,
    title: "Festiwal Jesieni",
    description: "Tradycyjny festiwal jesieni z piosenkami, tańcami i konkursami. Dzieci zaprezentują swoje przygotowania, a rodzice będą mogli zobaczyć efekty naszej pracy.",
    date: new Date(2025, 9, 18),
    time: "10:00",
    location: "Sala gimnastyczna",
    category: "festiwal",
    participants: "Wszystkie grupy",
    color: "bg-orange-100 dark:bg-orange-900/30 border-orange-300 dark:border-orange-700",
    icon: PartyPopper,
  },
  {
    id: 2,
    title: "Wycieczka do parku",
    description: "Spacer edukacyjny po parku miejskim. Zbieranie liści i kasztanów, obserwacja przyrody.",
    date: new Date(2025, 9, 19),
    time: "09:30",
    location: "Park Miejski",
    category: "wycieczka",
    participants: "Grupa Motylków",
    color: "bg-green-100 dark:bg-green-900/30 border-green-300 dark:border-green-700",
    icon: MapPin,
  },
  {
    id: 3,
    title: "Urodziny Zuzi",
    description: "Wspólne świętowanie urodzin Zuzi z tortem i zabawami.",
    date: new Date(2025, 9, 20),
    time: "14:00",
    location: "Sala zajęć - Grupa Biedronek",
    category: "urodziny",
    participants: "Grupa Biedronek",
    color: "bg-pink-100 dark:bg-pink-900/30 border-pink-300 dark:border-pink-700",
    icon: PartyPopper,
  },
  {
    id: 4,
    title: "Przedstawienie teatralne",
    description: "Teatrzyk kukiełkowy 'Czerwony Kapturek' w wykonaniu nauczycieli.",
    date: new Date(2025, 9, 21),
    time: "11:00",
    location: "Sala główna",
    category: "przedstawienie",
    participants: "Wszystkie dzieci",
    color: "bg-purple-100 dark:bg-purple-900/30 border-purple-300 dark:border-purple-700",
    icon: Music,
  },
  {
    id: 5,
    title: "Dzień Zdrowego Odżywiania",
    description: "Warsztaty kulinarne dla dzieci - przygotowujemy zdrowe przekąski.",
    date: new Date(2025, 9, 22),
    time: "10:30",
    location: "Kuchnia przedszkolna",
    category: "zajęcia",
    participants: "Grupa Słoneczek",
    color: "bg-yellow-100 dark:bg-yellow-900/30 border-yellow-300 dark:border-yellow-700",
    icon: Utensils,
  },
  {
    id: 6,
    title: "Sesja fotograficzna",
    description: "Profesjonalna sesja zdjęciowa dzieci - pamiątka na lata.",
    date: new Date(2025, 9, 23),
    time: "09:00",
    location: "Sala z dobrym oświetleniem",
    category: "inne",
    participants: "Wszystkie grupy",
    color: "bg-blue-100 dark:bg-blue-900/30 border-blue-300 dark:border-blue-700",
    icon: Camera,
  },
  {
    id: 7,
    title: "Spotkanie z pisarzem",
    description: "Wizyta lokalnego autora książek dla dzieci. Czytanie bajek i rozmowa o bohaterach.",
    date: new Date(2025, 9, 24),
    time: "11:30",
    location: "Biblioteka przedszkolna",
    category: "zajęcia",
    participants: "Grupa Motylków i Słoneczek",
    color: "bg-indigo-100 dark:bg-indigo-900/30 border-indigo-300 dark:border-indigo-700",
    icon: BookOpen,
  },
];

const Wydarzenia = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [weekStart, setWeekStart] = useState<Date>(startOfWeek(new Date(), { weekStartsOn: 1 }));

  const getDaysOfWeek = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      days.push(addDays(weekStart, i));
    }
    return days;
  };

  const getEventsForDate = (date: Date) => {
    return mockEvents.filter((event) => isSameDay(event.date, date));
  };

  const selectedDateEvents = getEventsForDate(selectedDate);

  const goToPreviousWeek = () => {
    setWeekStart(addDays(weekStart, -7));
  };

  const goToNextWeek = () => {
    setWeekStart(addDays(weekStart, 7));
  };

    return (
        <div className="h-screen bg-gray-50 dark:bg-gray-900 flex flex-col overflow-hidden">
            <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="flex justify-between items-center mb-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Wydarzenia</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Plan wydarzeń przedszkolnych
            </p>
          </div>
          <button
            onClick={() => {
              setSelectedDate(new Date());
              setWeekStart(startOfWeek(new Date(), { weekStartsOn: 1 }));
            }}
            className="bg-[#005FA6] text-white px-4 py-2 rounded-lg hover:bg-[#005FA6] transition-colors flex items-center gap-2 shadow-md"
          >
            <CalendarIcon className="w-4 h-4" />
            Dzisiaj
          </button>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 p-4">
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={goToPreviousWeek}
              className="p-2 hover:bg-white dark:hover:bg-gray-600 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
            <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
              {format(weekStart, "LLLL yyyy", { locale: pl })}
            </h2>
            <button
              onClick={goToNextWeek}
              className="p-2 hover:bg-white dark:hover:bg-gray-600 rounded-lg transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {getDaysOfWeek().map((day, index) => {
              const isSelected = isSameDay(day, selectedDate);
              const isToday = isSameDay(day, new Date());
              const hasEvents = getEventsForDate(day).length > 0;

              return (
                <button
                  key={index}
                  onClick={() => setSelectedDate(day)}
                  className={`flex flex-col items-center justify-center p-3 rounded-lg transition-all ${
                    isSelected
                      ? "bg-[#005FA6] text-white shadow-lg scale-105"
                      : isToday
                      ? "bg-white dark:bg-gray-800 border-2 border-[#005FA6] text-[#005FA6]"
                      : "bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <span className="text-xs font-medium uppercase mb-1">
                    {format(day, "EEE", { locale: pl })}
                  </span>
                  <span className="text-lg font-bold mb-1">
                    {format(day, "d")}
                  </span>
                  {hasEvents && (
                    <div className="flex gap-0.5">
                      {getEventsForDate(day).slice(0, 3).map((_, i) => (
                        <div
                          key={i}
                          className={`w-1 h-1 rounded-full ${
                            isSelected ? "bg-white" : "bg-[#005FA6]"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              {format(selectedDate, "EEEE, d MMMM yyyy", { locale: pl })}
            </h2>
            {selectedDateEvents.length > 0 && (
              <span className="bg-[#005FA6] text-white text-sm px-3 py-1 rounded-full">
                {selectedDateEvents.length} {selectedDateEvents.length === 1 ? "wydarzenie" : "wydarzenia"}
              </span>
            )}
          </div>

          {selectedDateEvents.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-12 text-center">
              <CalendarIcon className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Brak wydarzeń
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Nie ma żadnych zaplanowanych wydarzeń na ten dzień.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {selectedDateEvents.map((event) => {
                const IconComponent = event.icon;
                return (
                  <div
                    key={event.id}
                    className={`bg-white dark:bg-gray-800 rounded-lg border-2 ${event.color} overflow-hidden shadow-sm hover:shadow-md transition-shadow`}
                  >
                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg ${event.color}`}>
                          <IconComponent className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                              {event.title}
                            </h3>
                            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                              {event.category}
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                            {event.description}
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                              <Clock className="w-4 h-4 text-[#005FA6]" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                              <MapPin className="w-4 h-4 text-[#005FA6]" />
                              <span>{event.location}</span>
                            </div>
                            {event.participants && (
                              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                                <Users className="w-4 h-4 text-[#005FA6]" />
                                <span>{event.participants}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                );
              })}
            </div>
          )}
        </div>
            </div>
        </div>
    );
};

export default Wydarzenia;
