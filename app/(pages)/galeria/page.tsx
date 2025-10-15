"use client"

import React from "react";
import { Camera, X } from "lucide-react";
import CustomPagination from "@/app/components/ui/custom-pagination"

const Galeria = () => {
    const [selectedImage, setSelectedImage] = React.useState<number | null>(null);
    const [currentPage, setCurrentPage] = React.useState<number>(1);
    const imagesPerPage = 9;
    
    const images = [
        { id: 1, title: "Wspólne zabawy", description: "Dzieci bawią się na placu zabaw" },
        { id: 2, title: "Zajęcia plastyczne", description: "Tworzenie prac z kolorowego papieru" },
        { id: 3, title: "Czytanie bajek", description: "Pani nauczycielka czyta bajkę" },
        { id: 4, title: "Śniadanie", description: "Wspólne śniadanie w przedszkolu" },
        { id: 5, title: "Spacer", description: "Wycieczka do parku" },
        { id: 6, title: "Zajęcia muzyczne", description: "Śpiewanie piosenek" },
        { id: 7, title: "Budowanie z klocków", description: "Dzieci konstruują z klocków LEGO" },
        { id: 8, title: "Zajęcia sportowe", description: "Gry i zabawy ruchowe" },
        { id: 9, title: "Obiad", description: "Wspólny obiad w stołówce" },
        { id: 10, title: "Drzemka", description: "Czas na odpoczynek" },
        { id: 11, title: "Zajęcia z angielskiego", description: "Nauka języka angielskiego" },
        { id: 12, title: "Zabawy na śniegu", description: "Zimowe zabawy na placu" },
        { id: 13, title: "Występ teatralny", description: "Dzieci przygotowują przedstawienie" },
        { id: 14, title: "Zajęcia kulinarne", description: "Wspólne pieczenie ciasteczek" },
        { id: 15, title: "Wycieczka do zoo", description: "Wizyta w ogrodzie zoologicznym" },
        { id: 16, title: "Dzień dziecka", description: "Świętowanie Dnia Dziecka" },
        { id: 17, title: "Zajęcia z robotyki", description: "Nauka programowania" },
        { id: 18, title: "Warsztaty ceramiczne", description: "Tworzenie z gliny" },
    ];

    const totalPages = Math.ceil(images.length / imagesPerPage);
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const currentImages = images.slice(startIndex, endIndex);

    const handleImageClick = (imageId: number) => {
        setSelectedImage(imageId);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="h-screen bg-gray-50 flex flex-col overflow-hidden">
            <div className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Galeria</h1>
                        <p className="text-sm text-gray-500 mt-1">
                            Zdjęcia z przedszkola
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex-1 p-6 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentImages.map((image) => (
                    <div 
                        key={image.id}
                        className="bg-gray-200 rounded-lg p-4 min-h-[200px] flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors duration-200"
                        onClick={() => handleImageClick(image.id)}
                    >
                        <div className="text-center">
                            <Camera className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                            <p className="text-gray-500">{image.title}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            
            <CustomPagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                totalItems={images.length}
                itemsLabel="zdjęć"
            />

            {selectedImage && (
                <div className="fixed inset-0 backdrop-blur-md bg-white bg-opacity-10 flex items-center justify-center z-50" onClick={closeModal}>
                    <div className="relative max-w-4xl max-h-full p-4" onClick={(e) => e.stopPropagation()}>
                        <button 
                            onClick={closeModal}
                            className="absolute top-2 right-2 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <div className="bg-white rounded-lg p-6">
                            <div className="bg-gray-200 rounded-lg p-8 min-h-[400px] flex items-center justify-center mb-4">
                                <div className="text-center">
                                    <Camera className="w-24 h-24 text-gray-400 mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">
                                        {images.find(img => img.id === selectedImage)?.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {images.find(img => img.id === selectedImage)?.description}
                                    </p>
                                </div>
                            </div>
                            <div className="text-center">
                                <p className="text-sm text-gray-500">
                                    Kliknij poza obrazek lub przycisk X aby zamknąć
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Galeria;