import { NavLink } from "react-router-dom";
import { ServicesCards } from "../UI/ServicesCards";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

 const Services = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <section>
      {/* child */}
      <div className="flex flex-col items-start justify-center w-full">
        {/* Headings */}
        <div className="flex flex-col items-start justify-center w-full px-[1.9rem] lg:px-[3rem] py-[3rem] gap-[1rem]" data-aos="zoom-in-up" data-aos-duration="1000">
          <h2 className=" font-raleway relative inline-block after:content-[''] after:inline-block after:w-[120px] after:h-px after:bg-[#ffc451] after:mx-[10px] after:my-[4px] text-[20px] font-[500] text-[#9f9fa6]  text-transparent[50%] ">
            SERVICES
          </h2>
          <p className="text-[36px] font-[700] font-roboto">
            CHECK OUR SERVICES
          </p>
        </div>
        {/* Cards */}
        <div >
          <ServicesCards />
        </div>
        {/* Call to Action  */}
        <section>
          {/* child */}
          <div
            className="flex flex-col items-center justify-center bg-cover w-full "
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.41),rgba(0, 0, 0, 0.20)),url('/assets/cta-bg.jpg')",
              backgroundAttachment: "fixed",
            }}
          >
            {/* content and button */}
            <div className="flex text-wrap flex-col text-center items-center justify-center w-full px-[3rem] py-[4rem] gap-[1rem]" data-aos="zoom-in-up" data-aos-duration="1000">
              <h3 className="text-[2rem] font-[700] text-white font-raleway">
                Call To Action
              </h3>
              <p className="leading-[30px] text-[18px] font-[500] text-white font-roboto">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <NavLink to={"/"}>
                <button className=" font-raleway cursor-pointer text-[18px] text-wrap font-[500] text-white border-2 border-white-400 rounded-[4px] px-[2.7rem] py-[10px] hover:bg-yellow-400 hover:text-black transition duration-300 ease-in-out">
                  Call To Action
                </button>
              </NavLink>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Services;
