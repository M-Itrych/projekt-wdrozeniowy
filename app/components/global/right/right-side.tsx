"use client";

import React from "react";
import Link from "next/link";
import { 
    Bell, 
    CreditCard, 
    Camera,
    Zap,
    UserCheck
} from "lucide-react";

const RightSide = () => {
    const notifications = [
        {
            id: 1,
            title: "Przypomnienie",
            message: "Zebranie rodzicielskie jutro o 17:00",
            time: "10 min temu",
            type: "info"
        },
        {
            id: 2,
            title: "Nowa wiadomość",
            message: "Pani Maria przesłała wiadomość",
            time: "30 min temu",
            type: "message"
        }
    ];

    const quickActions = [
        {
            title: "Odbierz dziecko",
            icon: <UserCheck className="w-5 h-5" />,
            href: "/odbior",
            color: "from-red-500 to-red-600",
        },
        {
            title: "Płatności",
            icon: <CreditCard className="w-5 h-5" />,
            href: "/platnosci",
            color: "from-green-500 to-green-600",
        },
        {
            title: "Galeria",
            icon: <Camera className="w-5 h-5" />,
            href: "/galeria",
            color: "from-purple-500 to-purple-600",
        },
    ];

    return (
        <div className="w-[320px] h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col fixed top-0 right-0 z-40 overflow-y-auto shadow-xl border-l border-gray-200">
            <div className="p-6 space-y-6 pt-8">
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <Zap className="w-4 h-4 text-[#608858]" />
                        <h3 className="font-semibold text-gray-900 text-sm">Szybkie akcje</h3>
                    </div>
                    <div className="space-y-2">
                        {quickActions.map((action, index) => (
                            <Link
                                key={index}
                                href={action.href}
                                className="group flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-[#608858] hover:shadow-lg transition-all bg-white"
                            >
                                <div className={`bg-gradient-to-br ${action.color} text-white p-2.5 rounded-lg group-hover:scale-110 transition-transform shadow-md flex-shrink-0`}>
                                    {action.icon}
                                </div>
                                <p className="text-sm font-medium text-gray-700 group-hover:text-[#608858]">
                                    {action.title}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                    <div className="flex items-center gap-2 mb-3">
                        <Bell className="w-4 h-4 text-[#608858]" />
                        <h3 className="font-semibold text-gray-900 text-sm">Powiadomienia</h3>
                        <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                            {notifications.length}
                        </span>
                    </div>
                    <div className="space-y-2">
                        {notifications.map((notification) => (
                            <div 
                                key={notification.id}
                                className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow cursor-pointer"
                            >
                                <div className="flex items-start gap-2">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs font-semibold text-gray-900 mb-0.5">
                                            {notification.title}
                                        </p>
                                        <p className="text-xs text-gray-600 line-clamp-2">
                                            {notification.message}
                                        </p>
                                        <p className="text-xs text-gray-400 mt-1">
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

export default RightSide;