import PortfolioTeam from "/src/api/ProtfolioTeam.json";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination } from "swiper/modules";

import { TiStarFullOutline } from "react-icons/ti";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const ClientSwiperCom = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  const TiStarFullOut = {
    TiStarFullOutline: <TiStarFullOutline/>
  }
  return (
    <section
      className="flex py-15 flex-wrap items-center justify-center w-full client_section"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 1),rgba(0, 0, 0, 0.60)),url('/assets/testimonials-bg.jpg')",
      }}
    >
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        
      >
        {PortfolioTeam.map((curData, index) => {
          const { profileImg, name, title, rating, discrption } = curData;

          return (
            <SwiperSlide
              key={index}
              className="flex !items-center !justify-center w-full "
            >
              <div className="flex flex-wrap text-wrap flex-col items-center justify-center gap-3 py-[2rem] text-white" data-aos="zoom-in-up" data-aos-duration="1500">
                {/* profile image */}
                <div>
                  <img
                    src={profileImg}
                    alt={profileImg}
                    className=" rounded-[100%] w-[8rem] border-5 border-gray-500 opacity-300"
                  />
                </div>
                {/* name */}
                <div className="flex flex-col items-center justify-center gap-2">
                  <h3 className="text-[20px] text-white font-[700] font-raleway">{name}</h3>
                  {/* title */}
                  <p className="text-[16px] font-[600] text-[#a4a6a6] font-raleway">
                    {title}
                  </p>
                </div>
                {/* Rating */}
              <div className="flex items-center gap-2">
                  {rating?.map(()=> (
                        <div className="text-[#ffc108]">{TiStarFullOut['TiStarFullOutline']} </div>
                  ))}
              </div>

              

                {/* discrption */}

                <div className="w-[60%] text-center">
                <i class="bi bi-quote"></i>
                  <span className="text-[18px] font-[500] text-center font-roboto"><i>{discrption}</i></span>
                  <i class="bi bi-quote"></i>
                </div>
              </div> 
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
