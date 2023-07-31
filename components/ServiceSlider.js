/** @format */

//service data
export const serviceData = [
  {
    icon: <RxCode />,
    title: "Competetive Coding",
    description: "Code adrenaline: hackathons ignite, puzzles unravel, thrilling journey.",
    href: "https://www.codechef.com/users/noice_twice",
  },
  {
    icon: <RxLaptop />,
    title: "Web Development",
    description: "Tech-evolving web wizard, always learning and exploring.",
    href: "./work",
  },
  {
    icon: <RxBarChart />,
    title: "Data Analysis",
    description: "Using data analysis to unveil trends, patterns, and solutions.",
    href: "https://www.kaggle.com/swarnimsawane",

  },
  {
    icon: <RxSpeakerLoud />,
    title: "Music Production",
    description: "Notes and beats weaving emotion, enhancing storytelling.",
    href: "https://youtube.com/@melodicious5698",
    
  },
  
];

//impoert swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
  RxLaptop,
  RxBarChart,
  RxSpeakerLoud,
  RxCode,
} from "react-icons/rx";

//import required modules
import { FreeMode, Pagination } from "swiper";
import { space } from "postcss/lib/list";

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[ FreeMode, Pagination ]}
      className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">

                {/* icons */}
                <div className="text-4xl text-accent mb-4">{item.icon}</div>

                {/* title and desc */}
                <div className="mb-8">
                  <div className="mb-2 text-lg">{item.title}</div>
                  <p className="max-w-[350px] leading-normal">{item.description}</p>
                </div>

                {/* arrow */}
                <div className="text-3xl">
                  <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"/>
                </div>
              </div>
            </a>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default ServiceSlider;
