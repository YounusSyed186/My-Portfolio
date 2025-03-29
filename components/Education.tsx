"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";

export function Education() {
  return (
    <div className="min-h-screen max-h-[100%] w-full flex items-center justify-center ">
      <PinContainer
        title="Click to visit St. Ann's"
        hoverTitle="St Anns Grammar High School"
        href="https://stannsmalkajgiri.co.in/"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[25rem] h-[30rem] mx-2">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            St. Anns Grammar High School
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500">
              I have completed my primary and secondary education (Class 1 to Class 10).
              (2012-2022)
            </span>
          </div>
          <div className="flex flex-1 w-full items-center justify-center rounded-lg mt-4 bg-gradient-to-br to-blue-500">
            <Image width={200} height={200} className="h-full w-full object-fill rounded-xl" src="/stanns.webp" alt="St. Ann's School" />
          </div>
        </div>

      </PinContainer>



    </div>
  );
}