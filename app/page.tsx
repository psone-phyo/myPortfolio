import React from "react";
import Image from "next/image";
import IntroText from '@/components/homepage/introtext'
import MyPhoto from '@/components/homepage/myphoto'
import WhatIDo from '@/components/homepage/whatido'
import TechSkills from '@/components/homepage/techskills'
import ShowCarousel from '@/components/projects/showcarousel'
export default function Home() {
  return (
   <div>
    
    {/* //home page cover */}
    <div className="h-screen flex flex-col lg:grid lg:grid-cols-2">
      <div className="grid-col-1 order-2 lg:order-1 my-10">
      <IntroText/>
      </div>
      <div className="grid-col-1 order-1 lg:order-2">
      <MyPhoto/>
      </div>
    </div>

    {/* //what i do */}
    <div className="my-10">
      <WhatIDo/>
    </div>

    {/* tech skills */}
    <div className="my-10">
      <TechSkills />
    </div>

    <div>
      <h1 className="font-bold text-sky-600 text-center text-3xl my-5">Projects</h1>
      <ShowCarousel/>
    </div>
   </div>
  );
}
