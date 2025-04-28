import ServicesCard from "/src/api/ServicesCard.json";
import {
  BsActivity,
  BsBoundingBoxCircles,
  BsBroadcast,
  BsCalendar4Week,
  BsChatSquareText,
  BsEasel,
} from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const ServicesCards = () => {
  const servicesIcon = {
    BsActivity: <BsActivity />,
    BsBroadcast: <BsBroadcast />,
    BsEasel: <BsEasel />,
    BsBoundingBoxCircles: <BsBoundingBoxCircles />,
    BsCalendar4Week: <BsCalendar4Week />,
    BsChatSquareText: <BsChatSquareText />,
  };
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-[2rem] px-[1.8rem] lg:px-[3rem] py-[2rem] w-full" data-aos="zoom-in-up" data-aos-duration="1000">
      {ServicesCard.map((curData, index) => {
        const { icon, title, description } = curData;

        return (
          <div
            key={index}
            className="hover:-translate-y-1 transition-transform duration-[400ms] transform hover:scale-105 shadow-md flex flex-col flex-wrap text-center items-center justify-center gap-[2rem] px-[3rem] py-[4rem] "
          >
            {/* icon */}
            <div className="bg-yellow-400 w-[4rem] h-[4rem] text-[1.8rem] flex justify-center items-center">
              {servicesIcon[icon]}
            </div>
            <div>
              {/* Tittle */}
              <h3 className="text-[20px] font-[700] font-raleway">{title}</h3>
            </div>
            {/* discription */}
            <p className="text-[14px] leading-[24px] font-raleway">{description}</p>
          </div>
        );
      })}
    </div>
  );
};
