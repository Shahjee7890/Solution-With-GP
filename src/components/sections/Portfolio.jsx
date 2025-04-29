import { useState } from "react";
import PortolioImg from "/src/api/PortfolioImg.json";
import { PortfolioS2 } from "../UI/PortfolioS2";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Portfolio = () => {
  const portfolioBtn =
    "font-raleway cursor-pointer text-wrap border-white-400 rounded-[4px] px-[1.1rem] py-[6px] hover:bg-yellow-400 transition duration-300 ease-in-out";
  const portfolioBtnDiv =
    "flex flex-row items-center justify-center w-full px-[3rem] py-[4rem] gap-[1rem] w-[10%]";

  const [activeMenu, setActiveMenu] = useState("all");

  function handleMenuClick(menu) {
    setActiveMenu(menu);
  }

  const filteredData = PortolioImg.filter((item) => {
    if (activeMenu === "all") return true;
    return item.category === activeMenu;
  });
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <section>
      {/* child */}
      <div className="flex flex-col items-start justify-center w-full py-[3rem]">
        {/* Headings */}
        <div
          className="flex flex-col items-start justify-center w-full px-[1.9rem] lg:px-[3rem] py-[2rem] gap-[1rem]"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <h2 className="font-raleway relative inline-block after:content-[''] after:inline-block after:w-[120px] after:h-px after:bg-[#ffc451] after:mx-[10px] after:my-[4px] text-[20px] font-[500] text-[#9f9fa6]  text-transparent[50%] ">
            PORTFOLIO
          </h2>
          <p className="text-[36px] font-[700] font-roboto">
            CHECK OUR PORTFOLIO
          </p>
        </div>

        {/* Images */}
        {/* buttons */}
        <div
          className={portfolioBtnDiv}
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <button
            onClick={() => handleMenuClick("all")}
            className={`${portfolioBtn} ${
              activeMenu === "all" && "bg-yellow-400"
            }`}
          >
            All
          </button>
          <button
            onClick={() => handleMenuClick("app")}
            className={`${portfolioBtn} ${
              activeMenu === "app" && "bg-yellow-400"
            }`}
          >
            App
          </button>
          <button
            onClick={() => handleMenuClick("card")}
            className={`${portfolioBtn} ${
              activeMenu === "card" && "bg-yellow-400"
            }`}
          >
            Card
          </button>
          <button
            onClick={() => handleMenuClick("web")}
            className={`${portfolioBtn} ${
              activeMenu === "web" && "bg-yellow-400"
            }`}
          >
            Web
          </button>
        </div>
        {/* images */}
        {/* <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] px-[1rem] lg:px-[3rem] py-[4rem] w-full"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          {filteredData.map((curData, index) => {
            const { image, title, description } = curData;

            return (
              <div
                key={index}
                className=" picture-container h-full relative w-full items-center text-center transition-all duration-300 ease-in-out hover:scale-[1.05] gap-[1rem]"
              >
            

                <div className=" img h-full flex flex-col items-center justify-center relative group transform transition duration-1000 ease-in-out">
                  <div className="h-full">
                    <img src={image} alt="Picture" className=" w-full h-full" />
                  </div>
                  <div className="flex py-[1rem] flex-col bg-gray-50 duration-500 opacity-0 group-hover:opacity-100 gap-1 px-[10px] items-start absolute bottom-0 left-0 right-0 justify-center">
                    <div>
                      <h3 className="text-[16px] font-[500] font-poppins">
                        {title}
                      </h3>
                    </div>
             
                    <p className="text-[12px] text-gray-500 font-[500] font-raleway">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div> */}

<div
          className="gallery_section px-[1rem] lg:px-[3rem] py-[4rem] w-full"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          {filteredData.map((curData, index) => {
            const { image, title, description } = curData;

            return (
              <div
                key={index}
                className="gallery_section_card h-full relative w-full items-center text-center transition-all duration-300 ease-in-out hover:scale-[1.05] gap-[1rem]"
              >
            

                <div className=" img h-full flex flex-col items-center justify-center relative group transform transition duration-1000 ease-in-out">
                  <div className="h-full">
                    <img src={image} alt="Picture" className=" w-full h-full" />
                  </div>
                  <div className="flex py-[1rem] flex-col bg-gray-50 duration-500 opacity-0 group-hover:opacity-100 gap-1 px-[10px] items-start absolute bottom-0 left-0 right-0 justify-center">
                    <div>
                      <h3 className="text-[16px] font-[500] font-poppins">
                        {title}
                      </h3>
                    </div>
             
                    <p className="text-[12px] text-gray-500 font-[500] font-raleway">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Voluptatem */}

        <div>
          <PortfolioS2 />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
