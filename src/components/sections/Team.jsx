import { NavLink } from "react-router-dom";
import TeamCard from "/src/api/Team.json";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSquareXTwitter,
} from "react-icons/fa6";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
 const Team = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  const socialIcons =
    "text-black text-[15px] hover:text-[#333333] bg-[#ccc8c8] transition duration-300 ease-in-out border- rounded-[4px] px-[10px] py-[10px] hover:bg-yellow-400";

  return (
    <section>
      {/* child */}
      <div className="flex flex-col items-start justify-center w-full py-[2rem]" >
        <div className="flex flex-col items-start justify-center w-full px-[1.9rem] lg:px-[3rem] py-[2rem] gap-[1rem]" data-aos="zoom-in-up" data-aos-duration="1000">
          <h2 className="font-raleway relative inline-block after:content-[''] after:inline-block after:w-[120px] after:h-px after:bg-[#ffc451] after:mx-[10px] after:my-[4px] text-[20px] font-[500] text-[#9f9fa6]  text-transparent[50%]">
            TEAM
          </h2>

          <p className="text-[36px] font-[700] font-roboto">OUR TEAM</p>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2rem] px-[1rem] lg:px-[3rem] py-[2rem] w-full" data-aos="zoom-in-up" data-aos-duration="1800">
          {TeamCard.map((curData, index) => {
            const { image, name, title } = curData;

            return (
              <div
                key={index}
                className="flex flex-col flex-wrap text-center items-start justify-center gap-[1rem] px-[1rem] py-[1rem] "
              >
                {/* icon */}
                <div className="flex flex-col items-center justify-center relative group transform transition duration-1000 ease-in-out">
                  <div>
                    <img
                      src={image}
                      alt={image}
                      className=" border-gray-500"
                    />
                  </div>

                  <div className="flex group-hover:bottom-2 duration-500 opacity-0 group-hover:opacity-100 gap-4 items-center absolute bottom-3 left-0 right-0 justify-center">
                    {/* Twitter */}
                    <NavLink to={"/"} className={socialIcons}>
                      <FaSquareXTwitter />
                    </NavLink>
                    {/* FaceBook */}
                    <NavLink to={"/"} className={socialIcons}>
                      <FaFacebook />
                    </NavLink>
                    {/* Instagram */}
                    <NavLink to={"/"} className={socialIcons}>
                      <FaInstagram />
                    </NavLink>
                    {/* Linkedin */}
                    <NavLink to={"/"} className={socialIcons}>
                      <FaLinkedin />
                    </NavLink>
                  </div>
                </div>

                {/* Tittle */}
                <div className="flex flex-col items-start gap-1">
                  <div>
                    <h3 className="text-[20px] font-[700] text-[rgba(68, 68, 68, 0.22) ] text-transparent[50%] font-raleway ">
                      {name}
                    </h3>
                  </div>
                  {/* discription */}
                  <p className="text-[14] leading-[24px] ">{title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
 export default Team;