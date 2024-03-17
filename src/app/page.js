import SideBar from "@/components/SideBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="md:pl-[19rem] pt-12">
      Hello
    </div>
      
      <div className="hidden md:flex h-full w-60 flex-col fixed inset-y-0 z-40">
          <SideBar 
          />
        </div>
    </>
  );
}
