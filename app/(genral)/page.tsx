import Image from "next/image";

// components

import ParticlesContainer from "@/components/ParticlesContainer";
import ProjectsBtn from "@/components/ProjectsBtn";
import Avatar from "@/components/Avatar";
import BtnContainer from "@/components/home/BtnContainer";
import Subtitle from "@/components/home/Subtitle";
import Heading from "@/components/home/Heading";

export default function Home() {
  return (
    <main className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left container mx-auto">
          {/* title */}
          <Heading />
          {/* subtitle */}
          <Subtitle />
          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <BtnContainer />
        </div>
      </div>
      {/* image */}
      <div className="w-full h-full absolute right-0 bottom-0">
        {/* bg img */}

        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-" />
        {/* particles */}

        <div className="w-[1200px] h-full absolute right-0 bottom-0">
          <ParticlesContainer />
        </div>

        {/* avater img */}

        <Avatar />
      </div>
    </main>
  );
}
