import { Hero } from "../../components/Hero";
import { BentoGridDemo } from "../../components/Grid";
import { CanvasRevealEffectDemo } from "../../components/project";
import { Navbar23 } from "../../components/navbar";
import { Education } from "../../components/Education";
import { Education2 } from "../../components/education2";
import { Education3 } from "../../components/education3";
import { Skills } from "../../components/skills";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import Contactme from "../../components/contactme";


export default function Home() {
  return (
    <main>
      <div className="relative bg-black flex justify-center text-white items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
        <Navbar23/>
        <div id="home">

        <Hero />
        </div>
        <div>
            <TextGenerateEffect
              className='text-center text-yellow-300 text-[40px]md:text-4xl lg:text-5xl'
              words='About.' />

          </div>
        <BentoGridDemo />
        <div className="min-h-screen max-h-[100%]">
          <div>
            <TextGenerateEffect
              className='text-center text-[40px] text-white md:text-4xl lg:text-5xl'
              words='Projects.' />

          </div>
          <CanvasRevealEffectDemo />
        </div>
        <div>
          <TextGenerateEffect
            className='text-center text-[40px] text-white md:text-4xl lg:text-5xl'
            words='Education (2022-2028).' />

        </div>
        <div className="flex flex-col min-h-screen gap-2 md:flex-row z-0">
          <div className="md:flex-1 gap-3">
            <Education />
          </div>
          <div className="md:flex-1">
            <Education2 />
          </div>
          <div className="md:flex-1">
            <Education3 />
          </div>
        </div>
        <div className="min-h-screen max-h-[100%] z-0">
          <Skills />
        </div>
        <div className="min-h-screen max-h-[100%] px-3 md:px-1">
          <Contactme/>
        </div>

      </div>
    </main>
  );
}
