"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface NavbarContextType {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  toggleNavbar: () => void;
}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export const NavbarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("navbar-open");
    if (saved !== null) {
      setIsOpen(saved === "true");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("navbar-open", String(isOpen));
  }, [isOpen]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContext.Provider value={{ isOpen, setIsOpen, toggleNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (context === undefined) {
    throw new Error("useNavbar must be used within a NavbarProvider");
  }
  return context;
};

