import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";
import TestimonialHeading from "@/components/testimonial/Heading";
import TestimonialSliderWrapper from "@/components/testimonial/TestimonialSliderWrapper";
import React from "react";

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <Circles />
      <div className="container mx-auto h-full flex flex-col justify-center">
        <TestimonialHeading />

        {/* slider */}

        <div>
          <TestimonialSliderWrapper />
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Testimonials;
