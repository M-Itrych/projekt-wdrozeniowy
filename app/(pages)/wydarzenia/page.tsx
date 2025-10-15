"use client"

import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { pl } from "date-fns/locale";

const Wydarzenia = () => {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

    return (
        <div className="h-screen bg-gray-50 flex flex-col overflow-hidden">
            <div className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Wydarzenia</h1>
                        <p className="text-sm text-gray-500 mt-1">
                            Wydarzenia przedszkolne
                        </p>
                    </div>
                </div>
                <Calendar
                    mode="single"
                    defaultMonth={new Date()}
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    locale={pl}
                    className="rounded-lg border-[#608858] border shadow-sm p-3"
                    classNames={{
                        day_button: "data-[selected-single=true]:bg-[#608858] data-[selected-single=true]:text-white data-[selected-single=true]:hover:bg-[#4a6a44]"
                    }}
                />
            </div>
        </div>
    );
};

export default Wydarzenia;
