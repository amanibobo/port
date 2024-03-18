import Cardss from "@/components/Cards";
import CraftSec from "@/components/Craft";
import SideBar from "@/components/SideBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="md:pl-[19rem] pt-12 pr-10 font-semibold">
        <p className="text-sm bg-gradient-to-r from-gray-500 to-gray-900 bg-clip-text text-transparent">Hello there,</p>
        <p className="pt-8 text-lg md:text-[2.65rem] font-semibold leading-snug bg-gradient-to-r from-gray-400 to-gray-900 bg-clip-text text-transparent">
          Im Amani, a developer, researcher, and designer thinking about intelligent interfaces driven by
          novel interaction paradigms that fell natural, seamlessly blending
          with out daily intentions.
        </p>
        <div className="mt-12 mb-6">
        <CraftSec />
        </div>
         
        <div className="md:flex">
        <Cardss />
        <Cardss />
        <Cardss />
        </div>

        <div className="md:flex">
        <Cardss />
        <Cardss />
        <Cardss />
        </div>

        <div className="md:flex">
        <Cardss />
        <Cardss />
        <Cardss />
        </div>
      </div>

      <div className="hidden md:flex h-full w-60 flex-col fixed inset-y-0 z-40">
        <SideBar />
      </div>
    </>
  );
}
