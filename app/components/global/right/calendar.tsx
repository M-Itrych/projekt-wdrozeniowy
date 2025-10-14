"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Calendar13() {
  const [dropdown, setDropdown] =
    React.useState<React.ComponentProps<typeof Calendar>["captionLayout"]>("dropdown")
  const [date, setDate] = React.useState<Date | undefined>(new Date(2025, 5, 12))

  return (
    <div className="flex flex-col border-b-2 border-[#608858] pb-5 mb-5  w-fit h-fit">
      <Calendar
        mode="single"
        defaultMonth={date}
        selected={date}
        onSelect={setDate}
        captionLayout={dropdown}
        className="rounded-lg border-[#608858] border shadow-sm p-3 "
        classNames={{
    day_button: "data-[selected-single=true]:bg-blue-500 data-[selected-single=true]:text-white data-[selected-single=true]:hover:bg-blue-600"
  }}
        
      />
    </div>
  )
}
