"use client";

import { usePathname } from "next/navigation";
import NavBar from "./global/nav/nav-bar";
import RightSide from "./global/right/right-side";
import { useNavbar } from "./contexts/navbar-context";

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

const ConditionalLayout = ({ children }: ConditionalLayoutProps) => {
  const pathname = usePathname();
  const { isOpen } = useNavbar();
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
      <div className={`${isOpen ? "ml-[280px]" : "ml-[80px]"} mr-[320px] min-h-screen transition-all duration-300`}>
        {children}
      </div>
      <RightSide />
    </>
  );
};

export default ConditionalLayout;
