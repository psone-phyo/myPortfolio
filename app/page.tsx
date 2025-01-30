import React from "react";
import Image from "next/image";
import IntroText from '@/components/homepage/introtext'
import MyPhoto from '@/components/homepage/myphoto'
export default function Home() {

  return (
   <div>
    <div className="h-screen flex flex-col lg:grid lg:grid-cols-2">
      <div className="grid-col-1 order-2 lg:order-1 my-10">
      <IntroText/>
      </div>
      <div className="grid-col-1 order-1 lg:order-2">
      <MyPhoto/>
      </div>
    </div>

    <div>

    </div>
   </div>
  );
}
