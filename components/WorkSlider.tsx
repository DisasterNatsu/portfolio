"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// swiper css
import "swiper/css";

// import required modules
import { Pagination } from "swiper/modules";
import { BsArrowRight } from "react-icons/bs";

// data
import { WorkData } from "@/constants/WorkData";
import Image from "next/image";
import Link from "next/link";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {WorkData.slides.map((slide: Slide, index: number) => (
        <SwiperSlide key={index}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full cursor-pointer">
            {slide.images.map((image: Image, index: number) => (
              <Link
                key={index}
                href={image.link}
                target="_blank"
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
              >
                <div className="flex items-center justify-center relative overflow-hidden group">
                  {/* image */}

                  <Image
                    src={image.path}
                    width={500}
                    height={300}
                    alt={image.title}
                  />

                  {/* OverLay Gradient */}

                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700" />
                  {/* title */}
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-20 group-hover:xl:-translate-y-28 transition-all duration-300">
                    <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                      {/* title part 1 */}

                      <p className="delay-100 font-semibold text-white">LIVE</p>

                      {/* title part 2 */}

                      <p className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 font-semibold text-white">
                        PROJECT
                      </p>

                      {/* icon */}

                      <p className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200 font-semibold text-white">
                        <BsArrowRight />
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
