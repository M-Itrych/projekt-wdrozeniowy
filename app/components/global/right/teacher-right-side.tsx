"use client";

import React from "react";
import Link from "next/link";
import { 
    Bell, 
    ClipboardCheck, 
    Users,
    Zap,
    BookOpen,
    CalendarClock
} from "lucide-react";

const TeacherRightSide = () => {
    const notifications = [
        {
            id: 1,
            title: "Przypomnienie",
            message: "Rada pedagogiczna dziś o 15:30",
            time: "5 min temu",
            type: "info"
        },
    ];

    const quickActions = [
        {
            title: "Zaznacz obecność",
            icon: <ClipboardCheck className="w-5 h-5" />,
            href: "/nauczyciel/obecnosci",
            color: "from-green-500 to-green-600",
        },
        {
            title: "Moja grupa",
            icon: <Users className="w-5 h-5" />,
            href: "/nauczyciel/grupa",
            color: "from-blue-500 to-blue-600",
        },
        {
            title: "Plan zajęć",
            icon: <CalendarClock className="w-5 h-5" />,
            href: "/nauczyciel/plan",
            color: "from-purple-500 to-purple-600",
        },
        {
            title: "Dziennik",
            icon: <BookOpen className="w-5 h-5" />,
            href: "/nauczyciel/dziennik",
            color: "from-orange-500 to-orange-600",
        },
    ];

    const todaySchedule = [
        {
            time: "9:00 - 10:00",
            activity: "Zajęcia plastyczne",
            status: "active"
        },
        {
            time: "10:00 - 10:30",
            activity: "Przerwa na drugie śniadanie",
            status: "upcoming"
        },
        {
            time: "10:30 - 11:30",
            activity: "Zajęcia ruchowe",
            status: "upcoming"
        },
        {
            time: "15:30 - 16:30",
            activity: "Rada pedagogiczna",
            status: "upcoming"
        }
    ];

    return (
        <div className="w-[320px] h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 flex flex-col fixed top-0 right-0 z-40 overflow-y-auto shadow-xl border-l border-gray-200 dark:border-gray-700">
            <div className="p-6 space-y-6 pt-8">
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <Zap className="w-4 h-4 text-[#9333EA]" />
                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Szybkie akcje</h3>
                    </div>
                    <div className="space-y-2">
                        {quickActions.map((action, index) => (
                            <Link
                                key={index}
                                href={action.href}
                                className="group flex items-center gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-[#9333EA] hover:shadow-lg transition-all bg-white dark:bg-gray-800"
                            >
                                <div className={`bg-gradient-to-br ${action.color} text-white p-2.5 rounded-lg group-hover:scale-110 transition-transform shadow-md flex-shrink-0`}>
                                    {action.icon}
                                </div>
                                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-[#9333EA]">
                                    {action.title}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                    <div className="flex items-center gap-2 mb-3">
                        <CalendarClock className="w-4 h-4 text-[#9333EA]" />
                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Plan na dziś</h3>
                    </div>
                    <div className="space-y-2">
                        {todaySchedule.map((item, index) => (
                            <div 
                                key={index}
                                className={`bg-white dark:bg-gray-800 border rounded-lg p-3 transition-all ${
                                    item.status === 'active' 
                                        ? 'border-[#9333EA] shadow-md' 
                                        : 'border-gray-200 dark:border-gray-700'
                                }`}
                            >
                                <div className="flex items-start gap-2">
                                    <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                                        item.status === 'active' ? 'bg-[#9333EA]' : 'bg-gray-400'
                                    }`} />
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs font-semibold text-gray-900 dark:text-white mb-0.5">
                                            {item.time}
                                        </p>
                                        <p className="text-xs text-gray-600 dark:text-gray-300">
                                            {item.activity}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                    <div className="flex items-center gap-2 mb-3">
                        <Bell className="w-4 h-4 text-[#9333EA]" />
                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Powiadomienia</h3>
                        <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                            {notifications.length}
                        </span>
                    </div>
                    <div className="space-y-2">
                        {notifications.map((notification) => (
                            <div 
                                key={notification.id}
                                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 hover:shadow-md transition-shadow cursor-pointer"
                            >
                                <div className="flex items-start gap-2">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 flex-shrink-0" />
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs font-semibold text-gray-900 dark:text-white mb-0.5">
                                            {notification.title}
                                        </p>
                                        <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2">
                                            {notification.message}
                                        </p>
                                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                                            {notification.time}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeacherRightSide;

