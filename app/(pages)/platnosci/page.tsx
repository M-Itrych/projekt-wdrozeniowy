"use client"

import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
  } from "@/components/ui/pagination"
import { ChevronLeft, ChevronRight, CreditCard } from "lucide-react"



const Platnosci = () => {
    const [selected, setSelected] = React.useState<boolean>(false)
    const [selectedPage, setSelectedPage] = React.useState<number>(1)
    
    return (
        <div className="w-full h-screen bg-gray-50 flex flex-col overflow-hidden">
            <div className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Płatności</h1>
                        <p className="text-sm text-gray-500 mt-1">
                            Zarządzanie płatnościami przedszkolnymi
                        </p>
                    </div>
                    <button className="bg-[#608858] text-white px-4 py-2 rounded-lg hover:bg-[#4a6b44] transition-colors flex items-center gap-2 shadow-md">
                        <CreditCard className="w-4 h-4" />
                        Zapłać rachunek
                    </button>
                </div>
            </div>

            <div className="flex-1 p-6 overflow-y-auto">
                <div className="flex flex-col gap-4">
                    <h2 className="text-lg font-bold">Do zapłaty</h2>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Zaznacz</TableHead>
                                <TableHead>Data</TableHead>
                                <TableHead>Kwota</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Numer transakcji</TableHead>
                                <TableHead>Numer faktury</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <Checkbox 
                                        checked={selected} 
                                        onCheckedChange={(checked) => setSelected(checked === true)}
                                        className="data-[state=checked]:bg-[#608858] data-[state=checked]:border-[#608858] data-[state=checked]:text-white"
                                    />
                                </TableCell>
                                <TableCell>10.10.2025</TableCell>
                                <TableCell>100 PLN</TableCell>
                                <TableCell>Zakonczono</TableCell>
                                <TableCell>1234567890</TableCell>
                                <TableCell>1234567890</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <div className="flex flex-col gap-4">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationLink href="#" size="default" className="gap-1 px-2.5">
                                    <ChevronLeft />
                                    <span className="hidden sm:block">Poprzednia</span>
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink 
                                    href="#" 
                                    isActive={selectedPage === 1}
                                    onClick={() => setSelectedPage(1)}
                                    className={selectedPage === 1 ? "bg-[#608858] border-[#608858] text-white" : ""}
                                >
                                    1
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink 
                                    href="#" 
                                    isActive={selectedPage === 2}
                                    onClick={() => setSelectedPage(2)}
                                    className={selectedPage === 2 ? "bg-[#608858] border-[#608858] text-white" : ""}
                                >
                                    2
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationEllipsis/>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#" size="default" className="gap-1 px-2.5">
                                    <span className="hidden sm:block">Następna</span>
                                    <ChevronRight />
                                </PaginationLink>
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>
        </div>
    );
};

export default Platnosci;