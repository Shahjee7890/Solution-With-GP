import HomeIcons from "/src/api/HomeIcons.json";

import { BiBullseye, BiExitFullscreen } from "react-icons/bi";
import { FaRegGem, FaRegRectangleList } from "react-icons/fa6";
import { LuBinoculars } from "react-icons/lu";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Hero = () => {
  const heroIcon = {
    LuBinoculars: <LuBinoculars />,
    BiBullseye: <BiBullseye />,
    BiExitFullscreen: <BiExitFullscreen />,
    FaRegRectangleList: <FaRegRectangleList />,
    FaRegGem: <FaRegGem />,
  };

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <section>
      <div
        className=" flex flex-col pt-40 pb-10 px-5 items-center justify-center h-auto md:h-screen bg-cover w-full"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.41),rgba(0, 0, 0, 0.86)), url('/assets/hero-bg.jpg')",
        }}
      >
        <div className="text-center text-wrap" data-aos="zoom-in-up" data-aos-duration="2000">
          <h1 className="text-[32px] xl:text-[56px] leading-tight font-bold text-white font-poppins">
            Powerful Digital <br />
            Solutions With GP <span className="text-yellow-400 font-poppins">.</span>
          </h1>
          <p className="text-[20px]  xl:text-[24px] text-[#b3b5b5] font-roboto">
            We are team of talented digital marketers
          </p>
        </div>
        {/* hero cards */}
        <div className="flex w-full sm:w-auto flex-col sm:flex-row gap-[1.5rem] pt-[2.5rem] flex-wrap justify-center items-center" data-aos="zoom-in-up" data-aos-duration="2000">
          {HomeIcons.map((curData, index) => {
            const { icon, title } = curData;

            return (
              <div key={index} className=" w-full sm:w-auto flex justify-center items-center">
                <div className=" gap-2 h-[120px] w-full sm:w-[170px] lg:h-[150px] lg:w-[200px] flex flex-col justify-center items-center text-white border-1 border-gray-600 hover:border-yellow-400 rounded-[4px] px-[2.7rem] py-[2.5rem] hover:text-yellow-400 transition duration-300 ease-in-out cursor-pointer">
                  <div className="text-yellow-400  text-[30px]">
                    {heroIcon[icon]}
                  </div>
                  <h3 className="  text-[18px] md:text-[13px] lg:text-[16px] text-center font-raleway font-[700]">{title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
