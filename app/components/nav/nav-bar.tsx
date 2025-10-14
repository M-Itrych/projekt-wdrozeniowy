import Image from "next/image";


const NavBar = () => {
    return (
        <div className="w-[300px] h-screen bg-[#EEF1EE]">
            <div className="w-full flex flex-row bg-[#608858] p-4">
                <Image src="/logo_szkoly.png" alt="logo" width={50} height={50} className="w-[50px] h-[50px] bg-white rounded-full" />
            </div>
        </div>
    );

}

export default NavBar;