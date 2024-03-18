"use client";

import Image from "next/image";
import Link from "next/link";

export default function Cardss() {
  return (
    <>
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
                className="mx-auto shadow-black shadow-2xl"
              />
            </div>
          </Link>
        </div>
      </div>

      <div className="flex">
        <p>Apple</p>
        <p className="font-medium text-[12px] justify-between text-gray-400">2023</p>
      </div>
      <p className="font-medium  text-gray-400">Notes</p>
    </>
  );
}
