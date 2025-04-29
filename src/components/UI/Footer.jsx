import { NavLink } from "react-router-dom";

import {
  FaAngleRight,
  FaInstagram,
  FaLinkedin,
  FaSquareXTwitter,
} from "react-icons/fa6";


import { FaFacebook } from "react-icons/fa";

const footerBar = "hover:text-yellow-400 transition duration-300 ease-in-out";
const socialIcons =
  "text-black text-[23px] hover:text-black-400 bg-gray-400 transition duration-300 ease-in-out rounded-[4px] px-[5px] py-[5px] hover:bg-yellow-400";

export const Footer = () => {

  return (
    <footer className="bg-black text-white py-4  w-full">
      <div className="  flex flex-col pt-[2rem] justify-center px-[1rem] lg:items-center lg:px-[7rem] xl:px-0">
        <div className="flex flex-wrap lg:justify-between lg:px-[]">
          <div className="flex flex-wrap gap-[2rem] px-2 lg:px- pb-[2rem] ">
            <div className="flex flex-wrap gap-[4rem] lg:gap-[8rem]">
              <div className="flex flex-col gap-4">
                {/* Logo */}
                <div className="text-white text-[32px] font-bold py-1">
                  <NavLink to={"/"}>
                    <h1>GP</h1>
                  </NavLink>
                </div>
                {/* adress */}
                <div className="font-raleway">
                  <p>Plaza 102 2nd floor Y block</p>
                  <p>DHA Phase 3 Lahore</p>
                </div>
                {/* contact */}
                <div className="font-raleway">
                  <h5 className="flex gap-2">
                    Phone: <p>03114323056</p>
                  </h5>
                  <h5 className="flex gap-2">
                    Email: <p> info@example.com</p>
                  </h5>
                </div>
                {/* social media */}
                <div>
                  <div className="flex gap-4">
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
              </div>
              {/* Useful Links */}
              <div className="text-[#b5b5aa] font-roboto">
                <h4 className="text-[20px] text-white font-bold">
                  Useful Links
                </h4>
                <nav>
                  <ul>
                    <li className={footerBar}>
                      <NavLink to={"/"} className={"flex items-center"}>
                        <FaAngleRight />
                        Home
                      </NavLink>
                    </li>
                    <li className={footerBar}>
                      <NavLink to={"/about"} className={"flex items-center"}>
                        <FaAngleRight /> About
                      </NavLink>
                    </li>
                    <li className={footerBar}>
                      <NavLink to={"/services"} className={"flex items-center"}>
                        <FaAngleRight /> Services
                      </NavLink>
                    </li>
                    <li className={footerBar}>
                      <NavLink to={"/"} className={"flex items-center"}>
                        <FaAngleRight />
                        Terms of service
                      </NavLink>
                    </li>
                    <li className={footerBar}>
                      <NavLink to={"/"} className={"flex items-center"}>
                        <FaAngleRight />
                        Privacy policy
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* Our Services */}
              <div>
                <h4 className="text-[20px] text-white font-bold">
                  Our Services
                </h4>
                <nav>
                  <ul className="text-[#b5b5aa] font-roboto">
                    <li className={footerBar}>
                      <NavLink to={"/"} className={"flex items-center"}>
                        <FaAngleRight />
                        Web Design
                      </NavLink>
                    </li>
                    <li className={footerBar}>
                      <NavLink to={"/"} className={"flex items-center"}>
                        <FaAngleRight /> Web Development
                      </NavLink>
                    </li>
                    <li className={footerBar}>
                      <NavLink to={"/"} className={"flex items-center"}>
                        <FaAngleRight />
                        Marketing
                      </NavLink>
                    </li>
                    <li className={footerBar}>
                      <NavLink to={"/"} className={"flex items-center"}>
                        <FaAngleRight />
                        Graphic Design
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            {/* Our Newsletter */}
          </div>
          <div className="w-full lg:w-[40%] flex-nowrap gap-[10px] flex flex-col items-start">
            <h4 className="text-nowrap text-[15px] md:text-[20px] text-white font-bold">
              Our Newsletter
            </h4>
            <p className="text-[12px] lg:text-[16px] font-[400]">
              Subscribe to our newsletter and receive the latest news about our
              products and services!
            </p>
            <div className="flex w-full">
              <input
                className="w-full border-1 border-gray hover:border-yellow-400 rounded-[4px] px-[2.7rem] py-[7px] transition duration-300 ease-in-out"
                type="email"
                required
                autoComplete="off"
                name="email"
              />
              <div>
                <NavLink to={"/"}>
                  <button className="text-black border-2 border-yellow-400 rounded-[4px] px-[1rem] py-[7px] bg-yellow-400 cursor-pointer">
                    Subcribe
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center bg-black text-white py-4 gap-[20px]">
          <div className="text-center text-[14px] font-raleway font-[500]">
            © Copyright <span className="font-[700]"> GP </span> All Rights
            Reserved
            <br />
            <span className="text-[12px]">
              Designed by <span className="text-[#ffc552]">BootstrapMade</span>{" "}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
