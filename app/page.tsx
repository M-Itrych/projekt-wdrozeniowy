import Image from "next/image";
import RightSide from "./components/global/right/right-side";

export default function Home() {
  return (
    <div className="flex flex-row justify-end ">
      <RightSide />
    </div>
  );
}
