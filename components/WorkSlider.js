/** @format */

// data
export const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Dall-e Clone",
          path: "/PIC1.2.png",
        },
        {
          title: "title",
          path: "/PIC2.2.jpeg",
        },
        {
          title: "title",
          path: "/PIC3.jpeg",
        },
      ],
    },
  ],
};

const imageLinkDict = {
  "/PIC1.2.png": "https://dall-e-clone-swarnim-sawane.netlify.app/", // Replace "/link1" with the actual URL for the first image
  "/PIC2.2.jpeg": "https://chat-app-clone-swarnim-sawane.netlify.app/login", // Replace "/link2" with the actual URL for the second image
  "/PIC3.jpeg": "https://sites.google.com/view/koios", // Replace "/link3" with the actual URL for the third image
  "/thumb4.jpg": "https://www.google.com/", // Replace "/link4" with the actual URL for the fourth image
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
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
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
                      <div className="flex items-center justify-center relative overflow-hidden group">
                        {/* image */}
                        <Image
                          src={image.path}
                          width={500}
                          height={300}
                          alt=""
                        />

                        {/* overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#14596B] to-[#6dd5ed] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>

                        {/* title */}
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                            {/* title part 1 */}
                            <div className="delay-100">LIVE</div>
                            {/* title part 2 */}
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              PROJECT
                            </div>
                            {/* icons*/}
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
