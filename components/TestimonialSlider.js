/** @format */

// testimonial data
export const testimonialData = [
  {
    image: "/interact.jpg",
    name: "Interact Club",
    position: "Treasurer",
    message:
      "As treasurer of Interact Club, I actively participated in blood donation camps, planted trees, and organized clothing drives for the needy. Additionally, I led rallies to raise deforestation awareness, fostering positive change with a focus on community and environmental well-being.",
  },
  {
    image: "/iet.png",
    name: "Institute of Engeneering and Technology",
    position: "Treasurer",
    message:
      "As the Treasurer of the Institute of Engineering and Technology club, I fuel innovation and growth through meticulous financial management. Empowering aspiring engineering leaders with enriching workshops and events, we forge a promising future together.",
  },
];

//impoert swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//import required modules
import { Navigation, Pagination } from "swiper";

//icons
import { FaQuoteLeft } from "react-icons/fa";

//next image
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
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              {/* avatar , name , position */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  {/* avatar */}
                  <div className="mb-2 mx-auto">
                    <Image src={person.image} width={100} height={100} alt="" />
                  </div>
                  {/* name */}
                  <div className="text-lg">{person.name}</div>
                  {/* position */}
                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {person.position}
                  </div>
                </div>
              </div>
              {/* quote and message */}
              <div className="flexx-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                {/* quote and icon */}
                <div>
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                {/* message */}
                <div className="xl:test-lg text-center md:text-left">
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
