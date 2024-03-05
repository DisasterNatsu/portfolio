import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";
import ServiceHeading from "@/components/Services/Heading";
import ServicesSubTitle from "@/components/Services/SubTitle";
import ServiceSliderWrapper from "@/components/Services/ServiceSliderWrapper";

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <ServiceHeading />
            <ServicesSubTitle />
          </div>

          {/* slider */}
          <ServiceSliderWrapper />
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
