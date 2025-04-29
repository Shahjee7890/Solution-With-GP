import React, { useState, useRef, useEffect } from "react";
import { useInView } from "framer-motion";

import CountUp from "react-countup";
import {
  BsEmojiSmile,
  BsHeadset,
  BsJournalRichtext,
  BsPeople,
} from "react-icons/bs";

import Aos from "aos";
import "aos/dist/aos.css";

export const PortfolioS2 = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  const detailParent =
    "flex flex-row items-start gap-[15px] py-[1rem] lg:py-[2.5rem]";

  const [counterOn, setCounterOn] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      setCounterOn(true);
    }
    console.log("Counter is in view:", true);
  }, [isInView]);

  return (
    <section>
      {/* child */}
      <div className="flex flex-col lg:flex-row w-full items-start lg:justify-center py-[3rem] gap-[7rem] lg:gap-[5rem] px-[1.7rem] lg:px-[2rem] xl:px-[5rem]">
        {/* image */}
        <div>
          <img
            src="/assets/stats-img.jpg"
            alt="stats-picture"
            className="w-full object-fit"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          />
        </div>
        {/* content */}
        <div>
          {/* Heading and discrip */}

          <div
            className="flex flex-col items-start justify-center gap-[1rem] "
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <h3 className=" text-[25px] lg:text-[2rem] font-[700] font-raleway">
              Voluptatem dignissimos provident quasi
            </h3>
            <p className="text-[16px] font-[400] text-[#6c757d] font-roboto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor in reprehenderit
            </p>
          </div>

          {/* Details */}

          <div
            className="grid grid-cols-1 text-wrap lg:grid-cols-2 gap-1 lg:gap-[1rem] "
            ref={ref}
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            {/* detail 1 */}

            <div className={detailParent}>
              <div>
                <BsEmojiSmile className="text-yellow-400 w-[3rem] h-[3rem]" />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="lg:text-[2rem] text-[25px] font-[600] font-roboto">
                  {counterOn && (
                    <CountUp start={0} end={232} duration={2} delay={0} />
                  )}
                </h1>
                <div className="text-[15px] text-nowrap lg:text-[13px] xl:text-[15px] font-[400] text-[#6c757d] flex items-center justify-center gap-2 font-raleway">
                  <p className="text-[13px] lg:text-[10px] xl:text-[15px] font-[600] text-[#6c757d]">
                    Happy Clients
                  </p>
                  <p>consequuntur quae</p>
                </div>
              </div>
            </div>
            {/* detail 2 */}

            <div>
              <div className={detailParent}>
                <div>
                  <BsJournalRichtext className="text-yellow-400 w-[3rem] h-[3rem]" />
                </div>
                <div className="flex flex-col gap-4">
                  <h1 className="lg:text-[2rem] text-[25px] font-[600] font-roboto">
                    {counterOn && (
                      <CountUp start={0} end={521} duration={2} delay={0} />
                    )}
                  </h1>
                  <div className="flex items-center text-nowrap justify-center gap-1 font-raleway">
                    <p className="text-[13px] lg:text-[10px] xl:text-[15px] font-[600] text-[#6c757d] leading-0">
                      Projects
                    </p>
                    <p className="text-[15px] lg:text-[13px] xl:text-[15px] font-[400] text-[#6c757d] leading-0">
                      adipisci atque cum quia aut
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* detail 3 */}
            <div className={detailParent}>
              <div>
                <BsHeadset className="text-yellow-400 w-[3rem] h-[3rem]" />
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="lg:text-[2rem] text-[25px] font-[600] font-roboto">
                  {counterOn && (
                    <CountUp start={0} end={1453} duration={2} delay={0} />
                  )}
                </h1>
                <div className=" flex items-center text-nowrap justify-center text-[15px] lg:text-[12px] xl:text-[15px] font-[400] text-[#6c757d] gap-[6px] font-raleway">
                  <p className="text-[13px] lg:text-[10px] xl:text-[15px] font-[600] text-[#6c757d]">
                    Hours Of Support
                  </p>
                  <p>aut commodi quaerat</p>
                </div>
              </div>
            </div>
            {/* detail 4 */}
            <div className={detailParent}>
              <div>
                <BsPeople className="text-yellow-400 w-[3rem] h-[3rem]" />
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="lg:text-[2rem] text-[25px] font-[600] font-roboto">
                  {counterOn && (
                    <CountUp start={0} end={232} duration={2} delay={0} />
                  )}
                </h1>
                <div className="text-[15px] text-nowrap lg:text-[13px] xl:text-[15px] font-[400] text-[#6c757d] flex items-center justify-center gap-[6px] font-raleway">
                  <p className="text-[13px] lg:text-[10px] xl:text-[15px] font-[600] text-[#6c757d]">
                    Hard Workers
                  </p>
                  <p>rerum asperiores dolor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
