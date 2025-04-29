import AboutIcons from "/src/api/AboutIcons.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const SwiperCom = () => {

  useEffect(() => {
    Aos.init({});
  }, []);
  
  return (
    <section
      className="flex py-15 flex-wrap items-center justify-center service_section"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
    >
      <Swiper
        spaceBetween={160}
        slidesPerView={4}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // swiper responsive breakpoints
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="flex items-center justify-center sm:w-[90%] px-[1rem]"
      >
        {AboutIcons.map((curData, index) => {
          const { icons } = curData;
          return (
            <SwiperSlide
              key={index}
              className="flex !items-center !justify-center"
            >
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={icons}
                  alt={icons}
                  className="w-[100px] md:w-[150px] lg:w-[200px] brightness-10 hover:brightness-100 transition duration-300 ease-in-out"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
