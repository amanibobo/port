import Image from "next/image";

export default function SideBar() {

  return (
    <>
          <div className="bg-gray-100 h-full border-r flex flex-col overscroll-y-auto shadow-sm">
            <div className="pl-8 py-10 border-b bg-white flex flex-col gap-2">
                <span>
                    <Image 
                        src={"/2024logo.svg"}
                        width={80}
                        height={80}
                        quality="100"
                    />
                </span>
                <a href="/" className="text-[20px] font-medium">About</a>
                <a href="/" className="text-[20px] font-medium">Ideas</a>
            </div>
            <div className="pl-8 py-10 border-b bg-white flex flex-col gap-2">
            <p className="font-medium uppercase text-[12px] text-gray-400">s w e &nbsp;&nbsp;p r o j e c t s</p>
                <a href="/" className="text-[14px]">VisionDetect</a>
                <a href="/" className="text-[14px]">MotionField</a>
                <a href="/" className="text-[14px] mb-4">Audiotize</a>

                <p className="font-medium uppercase text-[12px] text-gray-400">r e s e a r c h &nbsp;&nbsp;w o r k</p>
                <a href="/" className="text-[14px]">School</a>
                <a href="/" className="text-[14px]">Papers & Topics</a>
                <a href="/" className="text-[14px]">LinkedIn</a>
            </div>
            <div className="pl-8 py-10 border-b bg-white flex flex-col gap-2">
                <p className="font-medium uppercase text-[12px] text-gray-400">c o n t a c t</p>
                <a href="/" target={"_blank"} className="text-[14px]">Email</a>
                <a href="https://github.com/amanibobo" target={"_blank"} className="text-[14px]">Github</a>
                <a href="https://linkedin.com/in/amanibobo" target={"_blank"} className="text-[14px] mb-1">LinkedIn</a>
            </div>
            
          </div>
    </>
  );
}