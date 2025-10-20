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
import { Download, Eye, Filter, Search } from "lucide-react"
import CustomPagination from "@/app/components/ui/custom-pagination"

const Dokumenty = () => {
    const [selectedPage, setSelectedPage] = React.useState<number>(1)
    const [filterType, setFilterType] = React.useState<string>("all")
    const [searchTerm, setSearchTerm] = React.useState<string>("")
    
    const documents = [
        {
            id: 1,
            title: "Regulamin przedszkola",
            description: "Kompletny regulamin przedszkola z zasadami i procedurami",
            type: "PDF",
            size: "2.4 MB",
            date: "15.10.2025",
            category: "Regulaminy"
        },
        {
            id: 2,
            title: "Jadłospis - październik 2025",
            description: "Szczegółowy jadłospis na październik 2025",
            type: "PDF",
            size: "1.2 MB",
            date: "01.10.2025",
            category: "Jadłospisy"
        },
        {
            id: 3,
            title: "Plan zajęć - grupa A",
            description: "Tygodniowy plan zajęć dla grupy A",
            type: "PDF",
            size: "0.8 MB",
            date: "08.10.2025",
            category: "Plany zajęć"
        },
        {
            id: 4,
            title: "Procedura przyprowadzania dzieci",
            description: "Instrukcja bezpiecznego przyprowadzania i odbierania dzieci",
            type: "DOC",
            size: "1.5 MB",
            date: "20.09.2025",
            category: "Procedury"
        },
        {
            id: 5,
            title: "Lista kontaktów - personel",
            description: "Aktualna lista kontaktów do wszystkich pracowników",
            type: "XLS",
            size: "0.6 MB",
            date: "12.10.2025",
            category: "Kontakty"
        },
        {
            id: 6,
            title: "Polityka prywatności",
            description: "Dokument dotyczący ochrony danych osobowych",
            type: "PDF",
            size: "3.1 MB",
            date: "05.10.2025",
            category: "Prawne"
        },
        {
            id: 7,
            title: "Wniosek o przyjęcie",
            description: "Formularz zgłoszeniowy dla nowych dzieci",
            type: "PDF",
            size: "1.8 MB",
            date: "18.09.2025",
            category: "Formularze"
        },
        {
            id: 8,
            title: "Harmonogram wycieczek 2025/2026",
            description: "Plan wycieczek i wyjść na cały rok szkolny",
            type: "PDF",
            size: "2.2 MB",
            date: "25.09.2025",
            category: "Wycieczki"
        }
    ]


    const filteredDocuments = documents.filter(doc => {
        const matchesType = filterType === "all" || doc.category.toLowerCase() === filterType.toLowerCase()
        const matchesSearch = searchTerm === "" || 
            doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doc.description.toLowerCase().includes(searchTerm.toLowerCase())
        return matchesType && matchesSearch
    })

    
    return (
        <div className="w-full h-screen bg-gray-50 dark:bg-gray-900 flex flex-col overflow-hidden">
            <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dokumenty</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            Centrum dokumentów przedszkolnych
                        </p>
                    </div>
                </div>
                
                <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                            <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                            <input
                                type="text"
                                placeholder="Szukaj dokumentów..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#005FA6] w-64"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <Filter className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                            <select 
                                value={filterType}
                                onChange={(e) => setFilterType(e.target.value)}
                                className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#005FA6]"
                            >
                                <option value="all">Wszystkie kategorie</option>
                                <option value="regulaminy">Regulaminy</option>
                                <option value="jadłospisy">Jadłospisy</option>
                                <option value="plany zajęć">Plany zajęć</option>
                                <option value="procedury">Procedury</option>
                                <option value="kontakty">Kontakty</option>
                                <option value="prawne">Prawne</option>
                                <option value="formularze">Formularze</option>
                                <option value="wycieczki">Wycieczki</option>
                            </select>
                            <div className="text-sm text-gray-600 dark:text-gray-300 ml-4">
                                Znaleziono: {filteredDocuments.length} dokumentów
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 p-6 overflow-y-auto">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Lista dokumentów</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Tytuł</TableHead>
                                    <TableHead>Opis</TableHead>
                                    <TableHead>Kategoria</TableHead>
                                    <TableHead>Typ</TableHead>
                                    <TableHead>Rozmiar</TableHead>
                                    <TableHead>Data</TableHead>
                                    <TableHead>Akcje</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredDocuments.map((document) => (
                                    <TableRow key={document.id}>
                                        <TableCell className="font-medium dark:text-white">{document.title}</TableCell>
                                        <TableCell className="max-w-xs">
                                            <div className="text-sm text-gray-900 dark:text-gray-300">{document.description}</div>
                                        </TableCell>
                                        <TableCell>
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
                                                {document.category}
                                            </span>
                                        </TableCell>
                                        <TableCell className="font-semibold text-gray-600 dark:text-gray-300">{document.type}</TableCell>
                                        <TableCell className="text-sm text-gray-500 dark:text-gray-400">{document.size}</TableCell>
                                        <TableCell className="text-sm text-gray-500 dark:text-gray-400">{document.date}</TableCell>
                                        <TableCell>
                                            <div className="flex gap-2">
                                                <button 
                                                    className="text-[#005FA6] hover:text-[#005FA6] transition-colors"
                                                    title="Pobierz"
                                                >
                                                    <Download className="w-4 h-4 cursor-pointer" />
                                                </button>
                                                <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors" title="Podgląd">
                                                    <Eye className="w-4 h-4 cursor-pointer" />
                                                </button>
                                            </div>
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
                totalPages={2}
                onPageChange={setSelectedPage}
                totalItems={documents.length}
                itemsLabel="dokumentów"
            />
        </div>
    );
};

export default Dokumenty;
