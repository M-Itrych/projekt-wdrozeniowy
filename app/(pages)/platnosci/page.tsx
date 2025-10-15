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
    const itemsPerPage = 12
    
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
        },
        {
            id: 7,
            date: "18.09.2025",
            amount: "80.00 PLN",
            status: "Zakończono",
            transactionNumber: "TXN001234573",
            invoiceNumber: "FV/2025/007",
            description: "Zajęcia dodatkowe - rytmika"
        },
        {
            id: 8,
            date: "15.09.2025",
            amount: "120.00 PLN",
            status: "W trakcie",
            transactionNumber: "TXN001234574",
            invoiceNumber: "FV/2025/008",
            description: "Wyprawka przedszkolna"
        },
        {
            id: 9,
            date: "12.09.2025",
            amount: "90.00 PLN",
            status: "Zakończono",
            transactionNumber: "TXN001234575",
            invoiceNumber: "FV/2025/009",
            description: "Zajęcia z logopedą"
        },
        {
            id: 10,
            date: "10.09.2025",
            amount: "60.00 PLN",
            status: "Anulowano",
            transactionNumber: "TXN001234576",
            invoiceNumber: "FV/2025/010",
            description: "Warsztaty plastyczne"
        },
        {
            id: 11,
            date: "08.09.2025",
            amount: "110.00 PLN",
            status: "Oczekuje",
            transactionNumber: "TXN001234577",
            invoiceNumber: "FV/2025/011",
            description: "Zajęcia z języka niemieckiego"
        },
        {
            id: 12,
            date: "05.09.2025",
            amount: "95.00 PLN",
            status: "Zakończono",
            transactionNumber: "TXN001234578",
            invoiceNumber: "FV/2025/012",
            description: "Wycieczka do teatru"
        },
        {
            id: 13,
            date: "03.09.2025",
            amount: "85.00 PLN",
            status: "W trakcie",
            transactionNumber: "TXN001234579",
            invoiceNumber: "FV/2025/013",
            description: "Zajęcia sportowe - basen"
        },
        {
            id: 14,
            date: "01.09.2025",
            amount: "130.00 PLN",
            status: "Zakończono",
            transactionNumber: "TXN001234580",
            invoiceNumber: "FV/2025/014",
            description: "Czesne za sierpień 2025"
        },
        {
            id: 15,
            date: "29.08.2025",
            amount: "70.00 PLN",
            status: "Oczekuje",
            transactionNumber: "TXN001234581",
            invoiceNumber: "FV/2025/015",
            description: "Warsztaty kulinarne"
        },
        {
            id: 16,
            date: "26.08.2025",
            amount: "105.00 PLN",
            status: "Zakończono",
            transactionNumber: "TXN001234582",
            invoiceNumber: "FV/2025/016",
            description: "Zajęcia z matematyki"
        },
        {
            id: 17,
            date: "24.08.2025",
            amount: "55.00 PLN",
            status: "Anulowano",
            transactionNumber: "TXN001234583",
            invoiceNumber: "FV/2025/017",
            description: "Warsztaty ekologiczne"
        },
        {
            id: 18,
            date: "22.08.2025",
            amount: "125.00 PLN",
            status: "W trakcie",
            transactionNumber: "TXN001234584",
            invoiceNumber: "FV/2025/018",
            description: "Wycieczka do muzeum"
        },
        {
            id: 19,
            date: "20.08.2025",
            amount: "75.00 PLN",
            status: "Zakończono",
            transactionNumber: "TXN001234585",
            invoiceNumber: "FV/2025/019",
            description: "Zajęcia z robotyki"
        },
        {
            id: 20,
            date: "18.08.2025",
            amount: "140.00 PLN",
            status: "Oczekuje",
            transactionNumber: "TXN001234586",
            invoiceNumber: "FV/2025/020",
            description: "Czesne za lipiec 2025"
        },
        {
            id: 21,
            date: "15.08.2025",
            amount: "65.00 PLN",
            status: "Zakończono",
            transactionNumber: "TXN001234587",
            invoiceNumber: "FV/2025/021",
            description: "Zajęcia taneczne"
        },
        {
            id: 22,
            date: "12.08.2025",
            amount: "115.00 PLN",
            status: "W trakcie",
            transactionNumber: "TXN001234588",
            invoiceNumber: "FV/2025/022",
            description: "Warsztaty teatralne"
        },
        {
            id: 23,
            date: "10.08.2025",
            amount: "88.00 PLN",
            status: "Zakończono",
            transactionNumber: "TXN001234589",
            invoiceNumber: "FV/2025/023",
            description: "Zajęcia z psychologiem"
        },
        {
            id: 24,
            date: "08.08.2025",
            amount: "135.00 PLN",
            status: "Oczekuje",
            transactionNumber: "TXN001234590",
            invoiceNumber: "FV/2025/024",
            description: "Wycieczka do planetarium"
        }
    ]

    const filteredPayments = payments.filter(payment => {
        if (filterStatus === "all") return true
        return payment.status.toLowerCase().includes(filterStatus.toLowerCase())
    })

    const totalPages = Math.ceil(filteredPayments.length / itemsPerPage)
    const startIndex = (selectedPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentPayments = filteredPayments.slice(startIndex, endIndex)

    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            const currentPageIds = currentPayments.map(payment => payment.id)
            setSelectedItems([...new Set([...selectedItems, ...currentPageIds])])
        } else {
            const currentPageIds = currentPayments.map(payment => payment.id)
            setSelectedItems(selectedItems.filter(id => !currentPageIds.includes(id)))
        }
    }

    const handleSelectItem = (id: number, checked: boolean) => {
        if (checked) {
            setSelectedItems([...selectedItems, id])
        } else {
            setSelectedItems(selectedItems.filter(item => item !== id))
        }
    }

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
                    </div>
                </div>
            </div>

            <div className="flex-1 p-6">
                <div className="bg-white h-full flex flex-col rounded-lg shadow-md overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h2 className="text-lg font-bold text-gray-900">Historia płatności</h2>
                    </div>
                    <div className="flex-1 overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>
                                        <Checkbox 
                                            checked={currentPayments.every(payment => selectedItems.includes(payment.id)) && currentPayments.length > 0}
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
                                {currentPayments.map((payment) => (
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
            </div>
            
            <CustomPagination 
                currentPage={selectedPage}
                totalPages={totalPages}
                onPageChange={setSelectedPage}
                totalItems={filteredPayments.length}
                itemsLabel="płatności"
            />
        </div>
    );
};

export default Platnosci;