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
import { Checkbox } from "@/components/ui/checkbox"
import { CreditCard, Filter, Download, Eye } from "lucide-react"
import CustomPagination from "@/app/components/ui/custom-pagination"



const Platnosci = () => {
    const [selectedItems, setSelectedItems] = React.useState<number[]>([])
    const [selectedPage, setSelectedPage] = React.useState<number>(1)
    const [filterStatus, setFilterStatus] = React.useState<string>("all")
    
    const payments = [
        {
            id: 1,
            date: "10.10.2025",
            amount: "100.00 PLN",
            status: "Zakończono",
            transactionNumber: "TXN001234567",
            invoiceNumber: "FV/2025/001",
            description: "Czesne za październik 2025"
        },
        {
            id: 2,
            date: "05.10.2025",
            amount: "50.00 PLN",
            status: "W trakcie",
            transactionNumber: "TXN001234568",
            invoiceNumber: "FV/2025/002",
            description: "Dodatkowe zajęcia - angielski"
        },
        {
            id: 3,
            date: "01.10.2025",
            amount: "200.00 PLN",
            status: "Zakończono",
            transactionNumber: "TXN001234569",
            invoiceNumber: "FV/2025/003",
            description: "Wyżywienie za październik 2025"
        },
        {
            id: 4,
            date: "28.09.2025",
            amount: "75.00 PLN",
            status: "Anulowano",
            transactionNumber: "TXN001234570",
            invoiceNumber: "FV/2025/004",
            description: "Wycieczka do zoo"
        },
        {
            id: 5,
            date: "25.09.2025",
            amount: "100.00 PLN",
            status: "Zakończono",
            transactionNumber: "TXN001234571",
            invoiceNumber: "FV/2025/005",
            description: "Czesne za wrzesień 2025"
        },
        {
            id: 6,
            date: "20.09.2025",
            amount: "150.00 PLN",
            status: "Oczekuje",
            transactionNumber: "TXN001234572",
            invoiceNumber: "FV/2025/006",
            description: "Ubezpieczenie NNW"
        }
    ]

    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            setSelectedItems(payments.map(payment => payment.id))
        } else {
            setSelectedItems([])
        }
    }

    const handleSelectItem = (id: number, checked: boolean) => {
        if (checked) {
            setSelectedItems([...selectedItems, id])
        } else {
            setSelectedItems(selectedItems.filter(item => item !== id))
        }
    }

    const filteredPayments = payments.filter(payment => {
        if (filterStatus === "all") return true
        return payment.status.toLowerCase().includes(filterStatus.toLowerCase())
    })

    const totalAmount = selectedItems.reduce((sum, id) => {
        const payment = payments.find(p => p.id === id)
        return sum + (payment ? parseFloat(payment.amount.replace(' PLN', '').replace(',', '.')) : 0)
    }, 0)
    
    return (
        <div className="h-screen bg-gray-50 flex flex-col overflow-hidden">
            <div className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Płatności</h1>
                        <p className="text-sm text-gray-500 mt-1">
                            Zarządzanie płatnościami przedszkolnymi
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2 shadow-md">
                            <Download className="w-4 h-4" />
                            Pobierz faktury
                        </button>
                        <button className="bg-[#608858] text-white px-4 py-2 rounded-lg hover:bg-[#4a6b44] transition-colors flex items-center gap-2 shadow-md">
                            <CreditCard className="w-4 h-4" />
                            Zapłać rachunek
                        </button>
                    </div>
                </div>
                
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Filter className="w-4 h-4 text-gray-500" />
                        <select 
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#608858]"
                        >
                            <option value="all">Wszystkie statusy</option>
                            <option value="zakończono">Zakończono</option>
                            <option value="w trakcie">W trakcie</option>
                            <option value="oczekuje">Oczekuje</option>
                            <option value="anulowano">Anulowano</option>
                        </select>
                        <div className="text-sm text-gray-600 ml-4">
                            Znaleziono: {filteredPayments.length} płatności
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 p-6 overflow-y-auto">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h2 className="text-lg font-bold text-gray-900">Historia płatności</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>
                                        <Checkbox 
                                            checked={selectedItems.length === filteredPayments.length && filteredPayments.length > 0}
                                            onCheckedChange={handleSelectAll}
                                            className="data-[state=checked]:bg-[#608858] data-[state=checked]:border-[#608858] data-[state=checked]:text-white"
                                        />
                                    </TableHead>
                                    <TableHead>Data</TableHead>
                                    <TableHead>Opis</TableHead>
                                    <TableHead>Kwota</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Numer transakcji</TableHead>
                                    <TableHead>Numer faktury</TableHead>
                                    <TableHead>Akcje</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredPayments.map((payment) => (
                                    <TableRow key={payment.id} className={selectedItems.includes(payment.id) ? 'bg-green-50' : ''}>
                                        <TableCell>
                                            <Checkbox 
                                                checked={selectedItems.includes(payment.id)}
                                                onCheckedChange={(checked) => handleSelectItem(payment.id, checked === true)}
                                                className="data-[state=checked]:bg-[#608858] data-[state=checked]:border-[#608858] data-[state=checked]:text-white"
                                            />
                                        </TableCell>
                                        <TableCell className="font-medium">{payment.date}</TableCell>
                                        <TableCell className="max-w-xs">
                                            <div className="text-sm text-gray-900">{payment.description}</div>
                                        </TableCell>
                                        <TableCell className="font-semibold">{payment.amount}</TableCell>
                                        <TableCell>
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                                payment.status === 'Zakończono' ? 'bg-green-100 text-green-800' :
                                                payment.status === 'W trakcie' ? 'bg-yellow-100 text-yellow-800' :
                                                payment.status === 'Oczekuje' ? 'bg-blue-100 text-blue-800' :
                                                'bg-red-100 text-red-800'
                                            }`}>
                                                {payment.status}
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-xs text-gray-500">{payment.transactionNumber}</TableCell>
                                        <TableCell className="text-xs text-gray-500">{payment.invoiceNumber}</TableCell>
                                        <TableCell>
                                            <button className="text-[#608858] hover:text-[#4a6b44] transition-colors">
                                                <Eye className="w-4 h-4" />
                                            </button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
                
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Podsumowanie</h3>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Wszystkie płatności:</span>
                                <span className="font-semibold">{payments.length}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Zakończone:</span>
                                <span className="font-semibold text-green-600">
                                    {payments.filter(p => p.status === 'Zakończono').length}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Oczekujące:</span>
                                <span className="font-semibold text-blue-600">
                                    {payments.filter(p => p.status === 'Oczekuje').length}
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Kontakt</h3>
                        <div className="space-y-2 text-sm">
                            <div className="text-gray-600">
                                <strong>Księgowość:</strong><br />
                                (123) 456-789<br />
                                ksiegowosc@przedszkole.pl
                            </div>
                            <div className="text-gray-600">
                                <strong>Godziny pracy:</strong><br />
                                Pon-Pt: 8:00-16:00
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <CustomPagination 
                currentPage={selectedPage}
                totalPages={10}
                onPageChange={setSelectedPage}
                totalItems={payments.length}
                itemsLabel="płatności"
            />
        </div>
    );
};

export default Platnosci;