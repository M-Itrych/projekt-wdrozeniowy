"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
} from "@/components/ui/pagination";

interface CustomPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    totalItems?: number;
    itemsLabel?: string;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
    totalItems,
    itemsLabel = "elementów"
}) => {
    const handlePreviousPage = (e: React.MouseEvent) => {
        e.preventDefault();
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = (e: React.MouseEvent) => {
        e.preventDefault();
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const handlePageClick = (e: React.MouseEvent, page: number) => {
        e.preventDefault();
        onPageChange(page);
    };

    return (
        <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-6 py-4">
            <div className="flex justify-center">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <Pagination>
                        <PaginationContent className="gap-2">
                            <PaginationItem>
                                <PaginationLink 
                                    href="#" 
                                    size="default" 
                                    className="gap-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-[#005FA6] transition-all duration-200 text-gray-700 dark:text-gray-300 hover:text-[#005FA6]"
                                    onClick={handlePreviousPage}
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                    <span className="hidden sm:block">Poprzednia</span>
                                </PaginationLink>
                            </PaginationItem>
                            
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <PaginationItem key={page}>
                                    <PaginationLink 
                                        href="#" 
                                        isActive={currentPage === page}
                                        onClick={(e) => handlePageClick(e, page)}
                                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                                            currentPage === page 
                                                ? "bg-[#005FA6] border-[#005FA6] text-white shadow-md hover:bg-[#005FA6]" 
                                                : "border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-[#005FA6] hover:text-[#005FA6]"
                                        }`}
                                    >
                                        {page}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}
                            
                            <PaginationItem>
                                <PaginationLink 
                                    href="#" 
                                    size="default" 
                                    className="gap-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-[#005FA6] transition-all duration-200 text-gray-700 dark:text-gray-300 hover:text-[#005FA6]"
                                    onClick={handleNextPage}
                                >
                                    <span className="hidden sm:block">Następna</span>
                                    <ChevronRight className="w-4 h-4" />
                                </PaginationLink>
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default CustomPagination;
