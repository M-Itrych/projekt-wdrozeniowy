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
import { Download, Eye, FileText, Filter, Search } from "lucide-react"
import CustomPagination from "@/app/components/ui/custom-pagination"

const Dokumenty = () => {
    const [selectedItems, setSelectedItems] = React.useState<number[]>([])
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

    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            setSelectedItems(filteredDocuments.map(doc => doc.id))
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

    const filteredDocuments = documents.filter(doc => {
        const matchesType = filterType === "all" || doc.category.toLowerCase() === filterType.toLowerCase()
        const matchesSearch = searchTerm === "" || 
            doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doc.description.toLowerCase().includes(searchTerm.toLowerCase())
        return matchesType && matchesSearch
    })

    const handleDownload = (document: any) => {
        // Symulacja pobierania dokumentu
        console.log(`Pobieranie: ${document.title}`)
        alert(`Pobieranie dokumentu: ${document.title}`)
    }

    const handleDownloadSelected = () => {
        if (selectedItems.length > 0) {
            console.log(`Pobieranie ${selectedItems.length} dokumentów`)
            alert(`Pobieranie ${selectedItems.length} wybranych dokumentów`)
        }
    }
    
    return (
        <div className="w-full h-screen bg-gray-50 flex flex-col overflow-hidden">
            <div className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Dokumenty</h1>
                        <p className="text-sm text-gray-500 mt-1">
                            Centrum dokumentów przedszkolnych
                        </p>
                    </div>
                    <div className="flex gap-2">
                        {selectedItems.length > 0 && (
                            <button 
                                onClick={handleDownloadSelected}
                                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2 shadow-md"
                            >
                                <Download className="w-4 h-4" />
                                Pobierz wybrane ({selectedItems.length})
                            </button>
                        )}
                    </div>
                </div>
                
                <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                            <Search className="w-4 h-4 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Szukaj dokumentów..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#608858] w-64"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <Filter className="w-4 h-4 text-gray-500" />
                            <select 
                                value={filterType}
                                onChange={(e) => setFilterType(e.target.value)}
                                className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#608858]"
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
                            <div className="text-sm text-gray-600 ml-4">
                                Znaleziono: {filteredDocuments.length} dokumentów
                            </div>
                        </div>
                    </div>
                    
                    {selectedItems.length > 0 && (
                        <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2">
                            <div className="text-sm text-green-800">
                                Wybrano: {selectedItems.length} dokumentów
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="flex-1 p-6 overflow-y-auto">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h2 className="text-lg font-bold text-gray-900">Lista dokumentów</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>
                                        <Checkbox 
                                            checked={selectedItems.length === filteredDocuments.length && filteredDocuments.length > 0}
                                            onCheckedChange={handleSelectAll}
                                            className="data-[state=checked]:bg-[#608858] data-[state=checked]:border-[#608858] data-[state=checked]:text-white"
                                        />
                                    </TableHead>
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
                                    <TableRow key={document.id} className={selectedItems.includes(document.id) ? 'bg-green-50' : ''}>
                                        <TableCell>
                                            <Checkbox 
                                                checked={selectedItems.includes(document.id)}
                                                onCheckedChange={(checked) => handleSelectItem(document.id, checked === true)}
                                                className="data-[state=checked]:bg-[#608858] data-[state=checked]:border-[#608858] data-[state=checked]:text-white"
                                            />
                                        </TableCell>
                                        <TableCell className="font-medium">{document.title}</TableCell>
                                        <TableCell className="max-w-xs">
                                            <div className="text-sm text-gray-900">{document.description}</div>
                                        </TableCell>
                                        <TableCell>
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                {document.category}
                                            </span>
                                        </TableCell>
                                        <TableCell className="font-semibold text-gray-600">{document.type}</TableCell>
                                        <TableCell className="text-sm text-gray-500">{document.size}</TableCell>
                                        <TableCell className="text-sm text-gray-500">{document.date}</TableCell>
                                        <TableCell>
                                            <div className="flex gap-2">
                                                <button 
                                                    onClick={() => handleDownload(document)}
                                                    className="text-[#608858] hover:text-[#4a6b44] transition-colors"
                                                    title="Pobierz"
                                                >
                                                    <Download className="w-4 h-4" />
                                                </button>
                                                <button className="text-gray-500 hover:text-gray-700 transition-colors" title="Podgląd">
                                                    <Eye className="w-4 h-4" />
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
