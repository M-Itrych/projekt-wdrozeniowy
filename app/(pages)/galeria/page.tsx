"use client"

import React from "react";
import { Camera, X, Upload, Download } from "lucide-react";

const Galeria = () => {
    const [selectedImage, setSelectedImage] = React.useState<number | null>(null);
    
    const images = [
        { id: 1, title: "Zdjęcie 1", description: "Opis zdjęcia 1" },
        { id: 2, title: "Zdjęcie 2", description: "Opis zdjęcia 2" },
        { id: 3, title: "Zdjęcie 3", description: "Opis zdjęcia 3" },
        { id: 4, title: "Zdjęcie 4", description: "Opis zdjęcia 4" },
        { id: 5, title: "Zdjęcie 5", description: "Opis zdjęcia 5" },
        { id: 6, title: "Zdjęcie 6", description: "Opis zdjęcia 6" },
        { id: 7, title: "Zdjęcie 7", description: "Opis zdjęcia 7" },
        { id: 8, title: "Zdjęcie 8", description: "Opis zdjęcia 8" },
        { id: 9, title: "Zdjęcie 9", description: "Opis zdjęcia 9" },
    ];

    const handleImageClick = (imageId: number) => {
        setSelectedImage(imageId);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="w-full h-screen bg-gray-50 flex flex-col overflow-hidden">
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
                {images.map((image) => (
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