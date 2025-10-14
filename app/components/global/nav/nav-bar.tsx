import Image from "next/image";


const NavBar = () => {
    return (
        <div className="w-[300px] h-screen bg-[#EEF1EE]">
            <div className="w-full flex flex-row bg-[#608858] gap-8 items-center p-4">
                <Image src="/logo_szkoly.png" alt="logo" width={40} height={40} className="w-[40px] h-[40px] bg-white rounded-full" />
                <h1 className="text-white text-l font-bold text-center">Przedszkole nr14<br />"Biały Żagiel"</h1>

            </div>
        </div>
    );

}

export default NavBar;