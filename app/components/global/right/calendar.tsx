"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { pl } from "react-day-picker/locale"

export function Kalendarz() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="flex flex-col border-b-2 border-[#608858] pb-5 mb-5 w-fit h-fit">
      <Calendar
        mode="single"
        defaultMonth={date}
        selected={date}
        onSelect={setDate}
        locale={pl}
        className="rounded-lg border-[#608858] border shadow-sm p-3"
        classNames={{
          day_button: "data-[selected-single=true]:bg-[#608858] data-[selected-single=true]:text-white data-[selected-single=true]:hover:bg-blue-600"
        }}
      />
    </div>
  )
}