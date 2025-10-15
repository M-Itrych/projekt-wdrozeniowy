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
    <>
      <NavBar />
      <div className="ml-[280px] mr-[320px] min-h-screen">
        {children}
      </div>
      <RightSide />
    </>
  );
};

export default ConditionalLayout;
