"use client";

import Image from "next/image";
import Link from "next/link";

export default function Cardss() {
  return (
    <>
    <div>
      <div>
        <div
          className={`md:max-w-[20rem] px-6 lg:px-8 rounded-xl bg-[#fbfbfd] pt-7 overflow-hidden ring-1 ring-inset ring-gray-400/10 `}
        >
          <Link href={"/"}>
            <div>
              <Image
                src={"/placeholder.png"}
                width="300"
                height="732"
                quality="100"
                alt="picture"
                className="mx-auto shadow-black shadow-xl"
              />
            </div>
          </Link>
        </div>
      </div>

      <div className="flex flex-col">
        <p>Place Holder</p>
        <p className="font-medium  text-gray-400">Place Holder</p>
      </div>
      </div>
    </>
  );
}
