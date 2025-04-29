import { RiCheckDoubleLine } from "react-icons/ri";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { SwiperCom } from "../UI/SwiperCom";
import { AboutGuide } from "../UI/AboutGuide";

const About = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <section id="about">
      <div
        className=" flex flex-col-reverse lg:flex-row gap-[2rem] w-full lg:justify-center justify-center py-[3rem] px-[1.7rem] lg:px-[3rem]"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        {/* content */}
        <div className="text-wrap flex flex-col gap-[2rem] w-full lg:w-[60%]">
          {/* Heading */}
          <h3 className="text-[1.75rem] font-[700] font-raleway">
            Voluptatem dignissimos provident
          </h3>
          {/* discription 1*/}
          <p>
            <i className="font-roboto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </i>
          </p>
          {/* Points */}
          <ul className="flex flex-col gap-[1rem] font-roboto">
            <li className="flex items-center gap-[0.5rem]">
              <RiCheckDoubleLine className="text-yellow-400 text-[1.5rem]" />
              Ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </li>
            <li className="flex items-center gap-[0.5rem]">
              <RiCheckDoubleLine className="text-yellow-400 text-[1.5rem]" />
              Duis aute irure dolor in reprehenderit in voluptate velit.
            </li>
            <li className="flex gap-[0.5rem]">
              <RiCheckDoubleLine className="text-yellow-400 text-[3.5rem] " />
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate trideta storacalaperda
              mastiro dolore eu fugiat nulla pariatur.
            </li>
          </ul>
          {/* discription 2*/}
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident
          </p>
        </div>

        {/*About image*/}

        <div className="w-full lg:w-[60%] ">
          <img src="../assets/about.jpg" alt="about-image" className="w-full" />
        </div>
      </div>
      {/* Swiper */}
      <div>
        <SwiperCom />
      </div>

      {/* Guide */}

      <div className="mx-auto w-full">
        <AboutGuide />
      </div>
    </section>
  );
};

export default About;
