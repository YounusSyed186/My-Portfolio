"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";

export function Education2() {
  return (
    <div className="min-h-screen max-h-[100%] w-full flex items-center justify-center z-0">
      
      <PinContainer
        title="Click to visit Sri Chaitanya Educational Institutions"
        hoverTitle="Sri Chaitanya Educational Institutions"
        href="https://srichaitanya.net/"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[25rem] h-[30rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
          Sri Chaitanya Educational Institutions
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500">
            I have successfully completed my intermediate education.
              (2022-2024)
            </span>
          </div>
          <div className="flex flex-1 w-full items-center justify-center rounded-lg mt-4 bg-gradient-to-br to-blue-500">
            <Image width={200} height={200} className="h-full w-full object-fill rounded-xl" src="/sri.webp" alt="St. Ann's School" />
          </div>
        </div>
        
      </PinContainer>
      
    </div>
  );
}