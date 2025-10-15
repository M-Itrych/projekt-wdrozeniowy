"use client";

import { usePathname } from "next/navigation";
import NavBar from "./global/nav/nav-bar";
import RightSide from "./global/right/right-side";

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

const ConditionalLayout = ({ children }: ConditionalLayoutProps) => {
  const pathname = usePathname();
  const hiddenPages = [
    '/logowanie',
    '/rejestracja',
    '/404',
    '/not-found'
  ];
  
  const shouldHideSidebars = hiddenPages.some(page => pathname.startsWith(page));
  
  if (shouldHideSidebars) {
    return <>{children}</>;
  }
  
  return (
    <div className="flex flex-row min-h-screen">
      <NavBar />
      {children}
      <RightSide />
    </div>
  );
};

export default ConditionalLayout;
