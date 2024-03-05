"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// swiper css
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";

// data
import { TestimonialData } from "@/constants/TestimonialsSlider";
import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {TestimonialData.map(
        (testimonials: TestimonialDataType, index: number) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              {/* avatar, name, position */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  {/* avatar */}

                  <div className="mb-2 mx-auto">
                    <Image
                      src={testimonials.image}
                      width={100}
                      height={100}
                      alt={testimonials.name}
                    />
                  </div>

                  {/* name */}

                  <div>
                    <p className="text-lg text-white">{testimonials.name}</p>
                  </div>

                  {/* position */}

                  <div>
                    <p className="text-[12px] uppercase font-extralight tracking-widest">
                      {testimonials.position}
                    </p>
                  </div>
                </div>
              </div>

              {/* quote & message */}
              <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                {/* quote */}

                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>

                {/* message */}

                <div className="xl:text-lg text-center md:text-left">
                  {testimonials.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
};

export default TestimonialSlider;
