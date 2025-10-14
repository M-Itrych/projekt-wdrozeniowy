import Image from "next/image";
import { Calendar13 } from "./calendar";


const RightSide = () => {
    return (
        <div className="w-[300px] h-screen bg-[#EEF1EE] flex flex-col items-center p-20 m-4  border-[#608858] border-l-2 shadow-sm">
            <Calendar13 />
        </div>
    );

}

export default RightSide;