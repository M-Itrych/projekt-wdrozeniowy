"use client";

import { usePathname } from "next/navigation";
import NavBar from "./global/nav/nav-bar";
import RightSide from "./global/right/right-side";
import TeacherNavBar from "./global/nav/teacher-nav-bar";
import TeacherRightSide from "./global/right/teacher-right-side";
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
  const isTeacherPage = pathname.startsWith('/nauczyciel');
  
  if (shouldHideSidebars) {
    return <>{children}</>;
  }
  
  if (isTeacherPage) {
    return (
      <>
        <TeacherNavBar />
        <div className={`${isOpen ? "ml-[280px]" : "ml-[80px]"} mr-[320px] min-h-screen transition-all duration-300`}>
          {children}
        </div>
        <TeacherRightSide />
      </>
    );
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
