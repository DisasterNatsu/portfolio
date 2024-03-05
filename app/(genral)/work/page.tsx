import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";
import WorkHeading from "@/components/work/Heading";
import WorkSliderWrapper from "@/components/work/WorkSliderWrapper";
import WorkSubtitle from "@/components/work/WorkSubTitle";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <WorkHeading />
            <WorkSubtitle />
          </div>

          {/* slider */}
          <WorkSliderWrapper />
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
