import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { Magicbutton } from './ui/magicbutton'
import Image from 'next/image'
import { cn } from '@/lib/utils'


export const Hero = () => {
  return (
    <div id='home' className='pb-20 pt-36 min-h-screen max-h-auto '>
        <div>
          <Spotlight className='-top-40 -left-10 
          md:-left-32 md:-top-20 h-screen' fill='white'/>
          <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
          <Spotlight className='top-28 left-40 h-[200vh] w-[60vw]' fill='blue'/>
          <Spotlight className='-top-18 -left-60 h-[100vh] w-[60vw]' fill='gray'/>
          <Spotlight className='top-68 -left-20 h-[80vh] w-[60vw]' fill='red'/>
         
        </div>
        <div className=" flex h-screen max-h-[140vh] w-screen items-center justify-center bg-black dark:bg-black absolute left-3 right-3 top-0 ">
        <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#000000_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
          "text-white"
        )}
      />
          
        </div>
        <div className='flex flex-col md:flex-row justify-center relative my-20 z-10 cursor-default z-0'>
        
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex-col flex items-center justify-center'>
            <h2 className='uppercase tracking-widest  text-center cursor-default text-blue-100 max-w-95'>
              Responsive and Intractive Websight
            </h2>
            <TextGenerateEffect
            className='text-center text-[40px] text-white md:text-4xl lg:text-5xl'
            words='Innovating beyond pixels — where design meets functionality.'/>
            <p className='text-center md:tracking-widest mb-4 text-sm md:text-2xl text-blue-500'>
              Hi,I am Younus Syed,MERN Stack Developer
            </p>
            <div className='md:w-150 md:flex md:justify-end'>
              <Magicbutton/>

            </div>
            
            
          </div>
          <div className='flex justify-center my-5 z-0'>
            <Image width={200} height={200} className="md:h-100 md:w-90 lg:w-100 xl:130 xl:m-5 mix-blend-overlay inset-0 object-cover h-50 w-50 rounded-xl hover:scale-110" src="/younus123.jpg" alt="" />
          </div>
         

          
        </div>
    </div>
  )
}
