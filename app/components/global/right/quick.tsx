"use client"

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Checked = DropdownMenuCheckboxItemProps["checked"]

export function Quick() {
  const [showOdbierzDziecko, setShowOdbierzDziecko] = React.useState<Checked>(true)
  

return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-full p-5 bg-[#608858] text-white">Szybkie akcje</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 h-90" align="end" sideOffset={5}>
          <DropdownMenuLabel>Opcje</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={showOdbierzDziecko}
            onCheckedChange={setShowOdbierzDziecko}
            onSelect={(e) => e.preventDefault()}
            className="data-[highlighted]:bg-[#608858] data-[highlighted]:text-white focus:bg-[#608858] focus:text-white"
          >
            Odbierz dziecko
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
      {showOdbierzDziecko && (
        <div className="mt-5 w-full flex flex-col items-center">
          <Button className="w-full p-5 bg-white text-black hover:bg-[#608858] hover:text-white"
          onClick={() => 
            alert("Pin modal would open here")

          }
          >Odbierz dziecko</Button>
        </div>
      )}
    </>
  )
}