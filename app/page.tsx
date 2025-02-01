import React from "react";
import Image from "next/image";
import IntroText from '@/components/homepage/introtext'
import MyPhoto from '@/components/homepage/myphoto'
import WhatIDo from '@/components/homepage/whatido'
import TechSkills from '@/components/homepage/techskills'
import ShowCarousel from '@/components/projects/showcarousel'
import Link from "next/link";
import { ArrowDown } from "lucide-react";
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

    <div className="my-10">
    <h1 className="text-center text-3xl font-bold text-sky-600 mb-5">Projects Previews</h1>
      <div className="flex justify-center items-center">
        <ShowCarousel/>
      </div>
    </div>
   </div>
  );
}
