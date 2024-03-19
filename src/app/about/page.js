import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SideBar from "@/components/SideBar";
import Image from "next/image";

export default function About() {
  
  return (
    <>
    <MaxWidthWrapper>
      <div className="md:pl-[20.5rem] md:pr-20 pt-4 pr-10 font-semibold pl-6">
        <div className="pt-6 mb-24">
          <p className="font-medium uppercase text-[12px] text-gray-400">
            m o r e &nbsp;&nbsp;i n t o &nbsp;&nbsp;m y &nbsp;&nbsp;l i f e ...
          </p>
        </div>

        <div className="flex"> 
            {/* this section will have my name and images, two more divs in this */}
            <div>
                <p className="font-bold text-[90px] max-w-md leading-[5rem]">Amani Bobo</p>
            </div>
            <div>
                <Image 
                    src={"/Group161.svg"}
                    width={40}
                    height={40}
                    quality={100}
                />
            </div>
        </div>

        <div>
            {/* two divs, on left side two images (livephotoskit) and on right side is info section */}
        </div>

        <div>
            {/* div will have title and then div inside with two more divs that have left and right side */}
        </div>


      </div>
      </MaxWidthWrapper>

      <div className="hidden md:flex h-full w-60 flex-col fixed inset-y-0 z-40">
        <SideBar />
      </div>
    </>
  );
}
