"use client"

import React from "react";
import { User, Calendar, X, Trash2, Plus } from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { Button } from "@/components/ui/button"

export default function MojeDziecko() {
    const [activeTab, setActiveTab] = React.useState<string>("dane")
    const [showEditModal, setShowEditModal] = React.useState<boolean>(false)
    const [modalType, setModalType] = React.useState<"child" | "contact" | "emergency" | "guardian" | null>(null)
    const [editingGuardian, setEditingGuardian] = React.useState<number | null>(null)
    const [formData, setFormData] = React.useState({
        name: "",
        phone: "",
        email: "",
        birthDate: "",
        group: "",
        pesel: "",
        address: ""
    })
    
    const [childData, setChildData] = React.useState({
        name: "Zosia Kowalska",
        birthDate: "15.03.2020",
        group: "Motylki",
        pesel: "20031512345"
    })

    const [contactData, setContactData] = React.useState({
        address: "ul. Słoneczna 15, 00-001 Warszawa"
    })

    const [emergencyContacts, setEmergencyContacts] = React.useState([
        {
            id: 1,
            name: "Anna Kowalska",
            phone: "+48 123 456 789"
        },
        {
            id: 2,
            name: "Piotr Kowalski",
            phone: "+48 987 654 321"
        }
    ])

    const [editingContact, setEditingContact] = React.useState<number | null>(null)
    
    const [guardians, setGuardians] = React.useState([
        {
            id: 1,
            name: "Anna Kowalska",
            phone: "+48 123 456 789",
            email: "anna.kowalska@email.com"
        },
        {
            id: 2,
            name: "Piotr Kowalski",
            phone: "+48 987 654 321",
            email: "piotr.kowalski@email.com"
        }
    ])

    const handleEditChild = () => {
        setFormData({
            name: childData.name,
            birthDate: childData.birthDate,
            group: childData.group,
            pesel: childData.pesel,
            phone: "",
            email: "",
            address: ""
        })
        setModalType("child")
        setShowEditModal(true)
    }

    const handleEditAddress = () => {
        setFormData({
            address: contactData.address,
            phone: "",
            name: "",
            email: "",
            birthDate: "",
            group: "",
            pesel: ""
        })
        setModalType("contact")
        setShowEditModal(true)
    }

    const handleEditEmergencyContact = (contactId: number) => {
        const contact = emergencyContacts.find(c => c.id === contactId)
        if (contact) {
            setFormData({
                name: contact.name,
                phone: contact.phone,
                email: "",
                birthDate: "",
                group: "",
                pesel: "",
                address: ""
            })
            setEditingContact(contactId)
            setModalType("emergency")
            setShowEditModal(true)
        }
    }

    const handleAddEmergencyContact = () => {
        setFormData({
            name: "",
            phone: "",
            email: "",
            birthDate: "",
            group: "",
            pesel: "",
            address: ""
        })
        setEditingContact(null)
        setModalType("emergency")
        setShowEditModal(true)
    }

    const handleDeleteEmergencyContact = (contactId: number) => {
        setEmergencyContacts(emergencyContacts.filter(c => c.id !== contactId))
    }

    const handleEditGuardian = (guardianId: number) => {
        const guardian = guardians.find(g => g.id === guardianId)
        if (guardian) {
            setFormData({
                name: guardian.name,
                phone: guardian.phone,
                email: guardian.email,
                birthDate: "",
                group: "",
                pesel: "",
                address: ""
            })
            setEditingGuardian(guardianId)
            setModalType("guardian")
            setShowEditModal(true)
        }
    }

    const handleSave = () => {
        if (modalType === "child") {
            setChildData({
                ...childData,
                name: formData.name
            })
        } else if (modalType === "contact") {
            setContactData({
                address: formData.address
            })
        } else if (modalType === "emergency") {
            if (editingContact !== null) {
                setEmergencyContacts(emergencyContacts.map(c =>
                    c.id === editingContact
                        ? {
                            ...c,
                            name: formData.name,
                            phone: formData.phone
                        }
                        : c
                ))
            } else {
                const newId = emergencyContacts.length > 0 
                    ? Math.max(...emergencyContacts.map(c => c.id)) + 1 
                    : 1
                setEmergencyContacts([
                    ...emergencyContacts,
                    {
                        id: newId,
                        name: formData.name,
                        phone: formData.phone
                    }
                ])
            }
        } else if (modalType === "guardian" && editingGuardian !== null) {
            setGuardians(guardians.map(g => 
                g.id === editingGuardian 
                    ? { 
                        ...g, 
                        name: formData.name,
                        phone: formData.phone,
                        email: formData.email
                    }
                    : g
            ))
        }
        handleCloseModal()
    }

    const handleCloseModal = () => {
        setShowEditModal(false)
        setEditingGuardian(null)
        setEditingContact(null)
        setModalType(null)
        setFormData({ 
            name: "", 
            phone: "", 
            email: "", 
            birthDate: "", 
            group: "", 
            pesel: "", 
            address: "" 
        })
    }

    const attendanceHistory = [
        {
            id: 1,
            date: "20.10.2025",
            entryTime: "07:30",
            exitTime: "16:00",
            present: true
        },
        {
            id: 2,
            date: "19.10.2025",
            entryTime: "-",
            exitTime: "-",
            present: false,
            reason: "choroba"
        },
        {
            id: 3,
            date: "18.10.2025",
            entryTime: "08:15",
            exitTime: "15:30",
            present: true
        },
        {
            id: 4,
            date: "17.10.2025",
            entryTime: "07:45",
            exitTime: "16:15",
            present: true
        },
        {
            id: 5,
            date: "16.10.2025",
            entryTime: "-",
            exitTime: "-",
            present: false,
            reason: "wakacje"
        },
        {
            id: 6,
            date: "15.10.2025",
            entryTime: "08:00",
            exitTime: "15:45",
            present: true
        },
        {
            id: 7,
            date: "14.10.2025",
            entryTime: "07:50",
            exitTime: "16:20",
            present: true
        },
        {
            id: 8,
            date: "13.10.2025",
            entryTime: "-",
            exitTime: "-",
            present: false,
            reason: "choroba"
        }
    ]

    const menuButtons = [
        {
            id: "dane",
            title: "Dane osobowe",
            icon: User,
            description: "Informacje podstawowe o dziecku"
        },
        {
            id: "frekwencja",
            title: "Frekwencja",
            icon: Calendar,
            description: "Historia obecności w przedszkolu"
        }
    ]

    const renderTabContent = () => {
        switch (activeTab) {
            case "dane":
                return (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                                <div className="flex items-start mb-2 justify-between">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Dane podstawowe</h3>
                                <Button 
                                        variant="outline" 
                                        size="sm"
                                        className="cursor-pointer"
                                        onClick={handleEditChild}
                                    >
                                        Edytuj
                                    </Button>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-300">Imię i nazwisko:</span>
                                        <span className="font-semibold dark:text-white">{childData.name}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-300">Data urodzenia:</span>
                                        <span className="font-semibold dark:text-white">{childData.birthDate}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-300">Grupa:</span>
                                        <span className="font-semibold text-[#005FA6]">{childData.group}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-300">PESEL:</span>
                                        <span className="font-semibold dark:text-white">{childData.pesel}</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                                <div className="flex items-start mb-2 justify-between">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Adres zamieszkania</h3>
                                    <Button 
                                        variant="outline" 
                                        size="sm"
                                        className="cursor-pointer"
                                        onClick={handleEditAddress}
                                    >
                                        Edytuj
                                    </Button>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-300">Adres:</span>
                                        <span className="font-semibold dark:text-white text-right max-w-xs">
                                            {contactData.address}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                            <div className="flex items-start mb-4 justify-between">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Kontakty awaryjne</h3>
                                <Button 
                                    variant="outline" 
                                    size="sm"
                                    className="cursor-pointer flex items-center gap-2"
                                    onClick={handleAddEmergencyContact}
                                >
                                    <Plus className="w-4 h-4" />
                                    Dodaj kontakt
                                </Button>
                            </div>
                            <div className="space-y-3">
                                {emergencyContacts.map((contact, index) => (
                                    <div key={contact.id} className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Kontakt {index + 1}:</span>
                                                <span className="font-semibold text-gray-900 dark:text-white">{contact.name}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm text-gray-600 dark:text-gray-300">Tel:</span>
                                                <span className="text-sm font-medium text-gray-900 dark:text-white">{contact.phone}</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="cursor-pointer"
                                                onClick={() => handleEditEmergencyContact(contact.id)}
                                            >
                                                Edytuj
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="cursor-pointer text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                                                onClick={() => handleDeleteEmergencyContact(contact.id)}
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Osoby uprawnione do odbioru dziecka</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {guardians.map((guardian, index) => (
                                    <div key={guardian.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-medium text-gray-900 dark:text-white">Opiekun {index + 1}</h4>
                                            <Button 
                                                variant="outline" 
                                                size="sm"
                                                className="cursor-pointer"
                                                onClick={() => handleEditGuardian(guardian.id)}
                                            >
                                                Edytuj
                                            </Button>
                                        </div>
                                        <div className="space-y-1 text-sm">
                                            <div className="text-gray-600 dark:text-gray-300">{guardian.name}</div>
                                            <div className="text-gray-600 dark:text-gray-300">{guardian.phone}</div>
                                            <div className="text-gray-600 dark:text-gray-300">{guardian.email}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            case "frekwencja":
                return (
                    <div className="space-y-6">
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Podsumowanie frekwencji</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">85%</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-300">Frekwencja ogółem</div>
                                </div>
                                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">18</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-300">Dni obecne</div>
                                </div>
                                <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                                    <div className="text-2xl font-bold text-red-600 dark:text-red-400">3</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-300">Dni nieobecne</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Historia obecności</h3>
                            </div>
                            <div className="overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Data obecności</TableHead>
                                            <TableHead>Godzina wejścia</TableHead>
                                            <TableHead>Godzina odbioru</TableHead>
                                            <TableHead>Status</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {attendanceHistory.map((record) => (
                                            <TableRow key={record.id}>
                                                <TableCell className="font-medium dark:text-white">{record.date}</TableCell>
                                                <TableCell className={record.present ? "text-gray-900 dark:text-gray-200" : "text-gray-400 dark:text-gray-500"}>
                                                    {record.entryTime}
                                                </TableCell>
                                                <TableCell className={record.present ? "text-gray-900 dark:text-gray-200" : "text-gray-400 dark:text-gray-500"}>
                                                    {record.exitTime}
                                                </TableCell>
                                                <TableCell>
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                                        record.present 
                                                            ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400' 
                                                            : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400'
                                                    }`}>
                                                        {record.present ? 'TAK' : 'NIE'}
                                                    </span>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    </div>
                )
            default:
                return null
        }
    }

    return (
        <div className="w-full h-screen bg-gray-50 dark:bg-gray-900 flex flex-col overflow-hidden">
            <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Moje dziecko</h1>
                        <div className="mt-2">
                            <h2 className="text-xl font-semibold text-[#005FA6]">Zosia Kowalska</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                Grupa: <span className="font-medium text-gray-700 dark:text-gray-300">Motylki</span>
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="flex gap-2">
                    {menuButtons.map((button) => {
                        const IconComponent = button.icon
                        return (
                            <button
                                key={button.id}
                                onClick={() => setActiveTab(button.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                                    activeTab === button.id
                                        ? "bg-[#005FA6] text-white shadow-md"
                                        : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                                }`}
                            >
                                <IconComponent className="w-4 h-4" />
                                <span className="font-medium">{button.title}</span>
                            </button>
                        )
                    })}
                </div>
            </div>

            <div className="flex-1 p-6 overflow-y-auto">
                {renderTabContent()}
            </div>

            {showEditModal && (
                <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md mx-4">
                        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                {modalType === "child" && "Edytuj dane dziecka"}
                                {modalType === "contact" && "Edytuj adres"}
                                {modalType === "emergency" && (editingContact ? "Edytuj kontakt awaryjny" : "Dodaj kontakt awaryjny")}
                                {modalType === "guardian" && "Edytuj dane opiekuna"}
                            </h3>
                            <button
                                onClick={handleCloseModal}
                                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            {modalType === "child" && (
                                <>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Imię i nazwisko
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005FA6] bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                            placeholder="np. Zosia Kowalska"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Data urodzenia
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.birthDate}
                                            disabled
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                                        />
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Pole tylko do odczytu</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Grupa
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.group}
                                            disabled
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                                        />
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Pole tylko do odczytu</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            PESEL
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.pesel}
                                            disabled
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                                        />
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Pole tylko do odczytu</p>
                                    </div>
                                </>
                            )}

                            {modalType === "contact" && (
                                <>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Adres
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.address}
                                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005FA6] bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                            placeholder="np. ul. Słoneczna 15, 00-001 Warszawa"
                                        />
                                    </div>
                                </>
                            )}

                            {modalType === "emergency" && (
                                <>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Imię i nazwisko osoby upoważnionej
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005FA6] bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                            placeholder="np. Anna Kowalska"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Numer telefonu
                                        </label>
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005FA6] bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                            placeholder="np. +48 123 456 789"
                                        />
                                    </div>
                                </>
                            )}

                            {modalType === "guardian" && (
                                <>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Imię i nazwisko
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005FA6] bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                            placeholder="np. Anna Kowalska"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Numer telefonu
                                        </label>
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005FA6] bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                            placeholder="np. +48 123 456 789"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Adres email
                                        </label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005FA6] bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                            placeholder="np. email@example.com"
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="flex justify-end gap-3 p-6 border-t border-gray-200 dark:border-gray-700">
                            <Button
                                variant="outline"
                                onClick={handleCloseModal}
                                className="cursor-pointer"
                            >
                                Anuluj
                            </Button>
                            <Button
                                onClick={handleSave}
                                className="bg-[#005FA6] text-white hover:bg-[#004a85] cursor-pointer"
                            >
                                Zapisz zmiany
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
