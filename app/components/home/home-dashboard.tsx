"use client";

import React from "react";
import {
  Calendar,
  Clock,
  MessageSquare,
  CreditCard,
  Bell,
  CheckCircle,
  ArrowRight,
  AlertCircle,
  Utensils,
} from "lucide-react";
import Link from "next/link";

export default function HomeDashboard() {
  const childInfo = {
    name: "Zosia Kowalska",
    group: "Grupa Motylki",
    teacher: "Pani Maria Nowak",
    attendance: 95,
  };

  const recentMessages = [
    {
      id: 1,
      sender: "Pani Maria Nowak",
      subject: "Zebranie  z rodzicami - 20.10.2025",
      date: "2025-10-14",
      unread: true,
    },
    {
      id: 2,
      sender: "Pani Agnieszka Wiśniewska",
      subject: "Jadłospis na następny tydzień",
      date: "2025-10-13",
      unread: false,
    },
    {
      id: 3,
      sender: "Dyrekcja Przedszkola",
      subject: "Zmiany w harmonogramie zajęć",
      date: "2025-10-12",
      unread: false,
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Zebranie rodzicielskie",
      date: "20.10.2025",
      time: "17:00",
      type: "meeting",
    },
    {
      id: 2,
      title: "Dzień Chłopca",
      date: "30.09.2025",
      time: "09:00",
      type: "event",
    },
    {
      id: 3,
      title: "Wycieczka do zoo",
      date: "25.10.2025",
      time: "08:30",
      type: "trip",
    },
  ];

  const pendingPayments = [
    {
      id: 1,
      title: "Czesne - Październik 2025",
      amount: 450,
      dueDate: "2025-10-31",
      status: "pending",
    },
    {
      id: 2,
      title: "Wyżywienie - Październik 2025",
      amount: 280,
      dueDate: "2025-10-31",
      status: "pending",
    },
  ];

  const todayMenu = {
    breakfast: "Kanapki z masłem i szynką, kakao",
    lunch: "Rosół z makaronem, kotlet schabowy z ziemniakami i surówką",
    snack: "Jogurt z owocami",
  };

  const announcements = [
    {
      id: 1,
      title: "Nowe zasady bezpieczeństwa",
      content: "Przypominamy o obowiązku odbioru dzieci przez osoby upoważnione...",
      date: "2025-10-14",
      priority: "high",
    },
    {
      id: 2,
      title: "Zdjęcia z jesiennego festiwalu",
      content: "Dodaliśmy nowe zdjęcia z festiwalu. Zapraszamy do galerii!",
      date: "2025-10-13",
      priority: "normal",
    },
  ];

  const stats = [
    {
      label: "Obecność",
      value: "95%",
      icon: <CheckCircle className="w-5 h-5" />,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      label: "Nieprzeczytane",
      value: "1",
      icon: <MessageSquare className="w-5 h-5" />,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      label: "Do zapłaty",
      value: "730 PLN",
      icon: <CreditCard className="w-5 h-5" />,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      label: "Wydarzenia",
      value: "3",
      icon: <Calendar className="w-5 h-5" />,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Witaj, Anna! 👋
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            Oto podsumowanie z przedszkola
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </p>
                </div>
                <div className={`${stat.bgColor} ${stat.color} p-3 rounded-lg`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Informacje o dziecku
              </h2>
              <Link
                href="/dziecko"
                className="text-[#005FA6] hover:text-[#005FA6] text-sm font-medium flex items-center gap-1"
              >
                Zobacz więcej
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#005FA6] to-[#005FA6] flex items-center justify-center text-white text-3xl font-bold">
                {childInfo.name.split(" ")[0][0]}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {childInfo.name}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Grupa</p>
                    <p className="text-base font-semibold text-gray-900 dark:text-white">
                      {childInfo.group}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Wychowawca</p>
                    <p className="text-base font-semibold text-gray-900 dark:text-white">
                      {childInfo.teacher}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Frekwencja</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-[#005FA6] h-2 rounded-full"
                          style={{ width: `${childInfo.attendance}%` }}
                        ></div>
                      </div>
                      <span className="text-base font-semibold text-gray-900 dark:text-white">
                        {childInfo.attendance}%
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Status</p>
                    <div className="flex items-center gap-1 text-green-600">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-base font-semibold">Obecne</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Dzisiejsze menu
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Utensils className="w-4 h-4 text-[#005FA6]" />
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    Śniadanie
                  </p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 pl-6">
                  {todayMenu.breakfast}
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Utensils className="w-4 h-4 text-[#005FA6]" />
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">Obiad</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 pl-6">
                  {todayMenu.lunch}
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Utensils className="w-4 h-4 text-[#005FA6]" />
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    Podwieczorek
                  </p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 pl-6">{todayMenu.snack}</p>
              </div>
            </div>
            <Link
              href="/jadlospis"
              className="mt-4 block text-center text-[#005FA6] hover:text-[#005FA6] text-sm font-medium"
            >
              Zobacz pełny jadłospis
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Ostatnie wiadomości
              </h2>
              <Link
                href="/wiadomosci"
                className="text-[#005FA6] hover:text-[#005FA6] text-sm font-medium flex items-center gap-1"
              >
                Zobacz wszystkie
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3">
              {recentMessages.map((message) => (
                <Link
                  key={message.id}
                  href="/wiadomosci"
                  className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border border-gray-100 dark:border-gray-600"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p
                          className={`text-sm font-semibold ${
                            message.unread
                              ? "text-gray-900 dark:text-white"
                              : "text-gray-700 dark:text-gray-300"
                          }`}
                        >
                          {message.sender}
                        </p>
                        {message.unread && (
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-1">
                        {message.subject}
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                        {message.date}
                      </p>
                    </div>
                    <MessageSquare className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Nadchodzące wydarzenia
              </h2>
              <Link
                href="/wydarzenia"
                className="text-[#005FA6] hover:text-[#005FA6] text-sm font-medium flex items-center gap-1"
              >
                Zobacz wszystkie
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="p-3 rounded-lg border border-gray-100 dark:border-gray-600 hover:border-[#005FA6] transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-[#005FA6] text-white p-2 rounded-lg flex-shrink-0">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        {event.title}
                      </p>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs text-gray-600 dark:text-gray-300 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {event.date}
                        </span>
                        <span className="text-xs text-gray-600 dark:text-gray-300 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {event.time}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Płatności do zapłaty
              </h2>
              <Link
                href="/platnosci"
                className="text-[#005FA6] hover:text-[#005FA6] text-sm font-medium flex items-center gap-1"
              >
                Zobacz wszystkie
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3">
              {pendingPayments.map((payment) => (
                <div
                  key={payment.id}
                  className="p-4 rounded-lg border border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20"
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {payment.title}
                    </p>
                    <span className="text-lg font-bold text-orange-600 dark:text-orange-400">
                      {payment.amount} PLN
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      Termin: {payment.dueDate}
                    </p>
                    <Link
                      href="/platnosci"
                      className="text-xs font-medium text-[#005FA6] hover:text-[#005FA6]"
                    >
                      Zapłać teraz
                    </Link>
                  </div>
                </div>
              ))}
              <div className="pt-3 border-t border-gray-200 dark:border-gray-600">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    Suma do zapłaty
                  </span>
                  <span className="text-xl font-bold text-orange-600 dark:text-orange-400">
                    {pendingPayments.reduce(
                      (sum, payment) => sum + payment.amount,
                      0
                    )}{" "}
                    PLN
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Ogłoszenia</h2>
              <Bell className="w-5 h-5 text-gray-400 dark:text-gray-500" />
            </div>
            <div className="space-y-3">
              {announcements.map((announcement) => (
                <div
                  key={announcement.id}
                  className={`p-4 rounded-lg border ${
                    announcement.priority === "high"
                      ? "border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20"
                      : "border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {announcement.priority === "high" ? (
                      <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                    ) : (
                      <Bell className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                        {announcement.title}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">
                        {announcement.content}
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-500">
                        {announcement.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

