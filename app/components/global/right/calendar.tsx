"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { pl } from "react-day-picker/locale"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

const notifications = {
  "2025-10-14": [
    { id: 1, title: "Spotkanie z nauczycielem", time: "10:00" },
    { id: 2, title: "Wycieczka do zoo", time: "14:00" }
  ],
  "2025-10-15": [
    { id: 3, title: "Dzień sportu", time: "09:00" }
  ]
}

export function Kalendarz() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false)

  const getNotificationsForDate = (selectedDate: Date | undefined) => {
    if (!selectedDate) return []
    const year = selectedDate.getFullYear()
    const month = String(selectedDate.getMonth() + 1).padStart(2, '0')
    const day = String(selectedDate.getDate()).padStart(2, '0')
    const dateKey = `${year}-${month}-${day}`
    return notifications[dateKey as keyof typeof notifications] || []
  }

  const dayNotifications = getNotificationsForDate(date)

  const isSameDay = (date1: Date | undefined, date2: Date | undefined) => {
    if (!date1 || !date2) return false
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate()
  }

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const isCalendarClick = target.closest('[data-slot="calendar"]')
      const isPopoverClick = target.closest('[role="dialog"]')
      
      if (!isCalendarClick && !isPopoverClick && isPopoverOpen) {
        setIsPopoverOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isPopoverOpen])

  return (
    <div className="flex flex-col border-b-2 border-[#608858] pb-5 mb-5 w-fit h-fit">
      <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
        <PopoverTrigger asChild>
          <div>
            <Calendar
              mode="single"
              defaultMonth={date}
              selected={date}
              onSelect={(newDate) => {
                if (isSameDay(newDate, date)) {
                  setIsPopoverOpen(!isPopoverOpen)
                } else {
                  setDate(newDate)
                  if (newDate) {
                    setIsPopoverOpen(true)
                  }
                }
              }}
              locale={pl}
              className="rounded-lg border-[#608858] border shadow-sm p-3"
              classNames={{
                day_button: "data-[selected-single=true]:bg-[#608858] data-[selected-single=true]:text-white data-[selected-single=true]:hover:bg-[#4a6a44]"
              }}
            />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-80" align="start">
          <div className="space-y-3">
            <div className="border-b pb-2">
              <h3 className="font-semibold text-lg">Powiadomienia</h3>
              <p className="text-sm text-gray-600">
                {date?.toLocaleDateString('pl-PL', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
            
            {dayNotifications.length > 0 ? (
              <div className="space-y-2">
                {dayNotifications.map((notification) => (
                  <div 
                    key={notification.id} 
                    className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium">{notification.title}</p>
                        <p className="text-sm text-gray-600">{notification.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6 text-gray-500">
                <p>Brak powiadomień na ten dzień</p>
              </div>
            )}
            
            <Button 
              className="w-full bg-[#608858] hover:bg-[#4a6a44] text-white"
              onClick={() => setIsPopoverOpen(false)}
            >
              Zamknij
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}