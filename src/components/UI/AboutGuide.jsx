import {
  BsArchive,
  BsBasket,
  BsBroadcast,
  BsCameraReels,
} from "react-icons/bs";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export const AboutGuide = () => {

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <section>
      {/* child */}
      <div className="flex flex-col px-[2rem] py-[2rem] lg:flex-row w-full items-center justify-center lg:py-[3rem] lg:justify-center lg:items-center lg:gap-[3rem] lg:px-[4rem]">
        {/* Image */}
        <div className=" g:w-[50%]">
          <img
            src="/assets/features-bg.jpg"
            alt="Features"
            className="w-full bg-cover"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          />
        </div>
        {/* content */}
        <div className="flex text-wrap py-[2rem] lg:py-0 flex-col gap-[3rem] lg:w-[50%]">
          <div
            className="flex items-start gap-[1rem]"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <BsArchive className="w-[3rem] h-[3rem] text-yellow-400" />
            <div>
              <h4 className="text-[20px] font-[700] font-raleway">
                Est labore ad
              </h4>
              <p className="text-[16px] font-[400] text-[#696969] font-roboto">
                Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                laboris nisi ut aliquip
              </p>
            </div>
          </div>

          <div
            className="flex items-start gap-[1rem]"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <BsBasket className="w-[3rem] h-[3rem] text-yellow-400" />

            <div>
              <h4 className="text-[20px] font-[700] font-raleway">
                Harum esse qui
              </h4>
              <p className="text-[16px] font-[400] text-[#696969] font-roboto">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt
              </p>
            </div>
          </div>

          <div
            className="flex items-start gap-[1rem]"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <BsBroadcast className="w-[3rem] h-[3rem] text-yellow-400" />

            <div>
              <h4 className="text-[20px] font-[700] font-raleway">
                Aut occaecati
              </h4>
              <p className="text-[16px] font-[400] text-[#696969] font-roboto">
                Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                maiores omnis facere
              </p>
            </div>
          </div>

          <div
            className="flex items-start gap-[1rem]"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <BsCameraReels className="w-[3rem] h-[3rem] text-yellow-400" />
            
            <div>
              <h4 className="text-[20px] font-[700] font-raleway">
                Beatae veritatis
              </h4>
              <p className="text-[16px] font-[400] text-[#696969] font-roboto">
                Expedita veritatis consequuntur nihil tempore laudantium vitae
                denat pacta
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
