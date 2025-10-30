"use client";

import { Users, Calendar, MessageSquare, ClipboardCheck } from "lucide-react";

export default function NauczycielPage() {
    const teacherName = "Maria";
    
    const stats = [
        {
            title: "Obecne dzieci",
            value: "18/22",
            icon: <Users className="w-6 h-6" />,
            color: "from-blue-500 to-blue-600",
            change: "+2 od wczoraj"
        },
        {
            title: "Zajęcia dzisiaj",
            value: "5",
            icon: <Calendar className="w-6 h-6" />,
            color: "from-purple-500 to-purple-600",
            change: "3 zakończone"
        },
        {
            title: "Nowe wiadomości",
            value: "5",
            icon: <MessageSquare className="w-6 h-6" />,
            color: "from-green-500 to-green-600",
            change: "od rodziców"
        },
        {
            title: "Do sprawdzenia",
            value: "3",
            icon: <ClipboardCheck className="w-6 h-6" />,
            color: "from-orange-500 to-orange-600",
            change: "dokumenty"
        }
    ];

    const recentActivities = [
        {
            time: "8:45",
            title: "Zaznaczono obecność",
            description: "18 dzieci obecnych, 4 nieobecnych",
            type: "attendance"
        },
        {
            time: "9:30",
            title: "Wiadomość od rodzica",
            description: "Witam, kiedy odbedzie się wywiadówka?",
            type: "message"
        },
        {
            time: "10:15",
            title: "Dodano zdjęcia",
            description: "12 nowych zdjęć z zajęć plastycznych",
            type: "gallery"
        },
    ];

    return (
        <div className="p-8 min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {`Witaj z powrotem, ${teacherName}! 👋`}
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Oto podsumowanie Twojego dnia
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <div 
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className={`bg-gradient-to-br ${stat.color} text-white p-3 rounded-lg shadow-md`}>
                                    {stat.icon}
                                </div>
                            </div>
                            <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">
                                {stat.title}
                            </h3>
                            <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                {stat.value}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                {stat.change}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                        Ostatnie aktywności
                    </h2>
                    <div className="space-y-4">
                        {recentActivities.map((activity, index) => (
                            <div 
                                key={index}
                                className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                            >
                                <div className="flex-shrink-0 w-16 text-sm font-semibold text-[#9333EA]">
                                    {activity.time}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                                        {activity.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {activity.description}
                                    </p>
                                </div>
                                <div className={`w-2 h-2 rounded-full mt-2 ${
                                    activity.type === 'attendance' ? 'bg-blue-500' :
                                    activity.type === 'message' ? 'bg-green-500' :
                                    activity.type === 'gallery' ? 'bg-purple-500' :
                                    'bg-orange-500'
                                }`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
