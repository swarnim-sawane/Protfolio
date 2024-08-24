/** @format */

// data
export const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Olly",
          path: "/Olly.png",
        },
        {
          title: "Dall-e Clone",
          path: "/PIC1.2.png",
        },
        {
          title: "Noice Chat",
          path: "/PIC2.2.jpeg",
        },
        {
          title: "Koios",
          path: "/PIC3.jpeg",
        },
      ],
    },
  ],
};

const imageLinkDict = {
  "/Olly.png": "https://www.cloudraft.io/olly", // Replace "/link4" with the actual URL for the fourth image
  "/PIC1.2.png": "https://dall-e-clone-swarnim-sawane.netlify.app/", // Replace "/link1" with the actual URL for the first image
  "/PIC2.2.jpeg": "https://chat-app-clone-swarnim-sawane.netlify.app/", // Replace "/link2" with the actual URL for the second image
  "/PIC3.jpeg": "https://sites.google.com/view/koios", // Replace "/link3" with the actual URL for the third image
  "/thumb1.jpg": "https://www.google.com/", // Replace "/link5" with the actual URL for the fifth image
  // Add more entries as needed for other images
};

//impoert swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper";

//icons
import { BsArrowRight } from "react-icons/bs";

//next image
import Image from "next/image";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-auto"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-8 cursor-pointer">
              {slide.images.map((image, index) => {
                const link = imageLinkDict[image.path] || "#";
                return (
                  <a
                    href={link}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                      key={index}
                    >
                      <div className="flex items-center justify-center relative overflow-hidden group w-full h-full">
                        {/* image */}
                        <Image
                          src={image.path}
                          layout="responsive"
                          width={500}
                          height={300}
                          objectFit="contain" // Ensures the entire image is visible
                          alt={image.title}
                          className="rounded-lg"
                        />

                        {/* overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#14596B] to-[#1a0932] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>

                        {/* title */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center translate-y-full group-hover:translate-y-0 transition-all duration-300">
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em] text-center">
                            {/* title part 1 */}
                            <div className="delay-100 text-xl">LIVE</div>
                            {/* title part 2 */}
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 text-xl">
                              PROJECT
                            </div>
                            {/* icons */}
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200 text-accent">
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default WorkSlider;


