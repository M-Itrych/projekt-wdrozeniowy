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
  const [showZglosNieobecnosc, setShowZglosNieobecnosc] = React.useState<Checked>(false)
  const [showRachunki, setShowRachunki] = React.useState<Checked>(false)

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="default" className="w-full p-5 bg-[#608858] text-white hover:bg-[#4c7545] border border-gray-300" >
            Szybkie akcje
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-fit h-fit p-5" side="left" align="start">
          <DropdownMenuLabel>Menu</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={showOdbierzDziecko}
            onCheckedChange={setShowOdbierzDziecko}
            onSelect={(e) => e.preventDefault()}
            className="data-[highlighted]:bg-[#608858] data-[highlighted]:text-white focus:bg-[#608858] focus:text-white"
          >
            Odbierz dziecko
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showZglosNieobecnosc}
            onCheckedChange={setShowZglosNieobecnosc}
            onSelect={(e) => e.preventDefault()}
            className="data-[highlighted]:bg-[#608858] data-[highlighted]:text-white focus:bg-[#608858] focus:text-white"
          >
            Zgłoś nieobecność
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showRachunki}
            onCheckedChange={setShowRachunki}
            onSelect={(e) => e.preventDefault()}
            className="data-[highlighted]:bg-[#608858] data-[highlighted]:text-white focus:bg-[#608858] focus:text-white"
          >
            Rachunki
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
      {showOdbierzDziecko && (
        <div className="mt-5 w-full flex flex-col items-center">
          <Button className="w-full p-5 bg-white text-black hover:bg-[#608858] hover:text-white border border-gray-300">
            Odbierz dziecko
          </Button>
        </div>
      )}
      {showZglosNieobecnosc && (
        <div className="mt-5 w-full flex flex-col items-center">
          <Button className="w-full p-5 bg-white text-black hover:bg-[#608858] hover:text-white border border-gray-300">
            Zgłoś nieobecność
          </Button>
        </div>
      )}
      {showRachunki && (
        <div className="mt-5 w-full flex flex-col items-center">
          <Button className="w-full p-5 bg-white text-black hover:bg-[#608858] hover:text-white border border-gray-300">
            Rachunki
          </Button>
        </div>
      )}
    </>
  )
}