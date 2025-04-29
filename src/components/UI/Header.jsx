import { useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { NavLink, useLocation } from "react-router-dom";
import Dropdown from "../shared/dropdown";

export const Header = () => {
  const [showMen, setShowMen] = useState(false);
  const [openDropdown, setOpenDropDown] = useState(false);
  const handleMen = () => {
    setShowMen(!showMen);
  };
  const location = useLocation();
  const pathname = location.pathname;
  console.log(pathname);

  // open dropdown on hover
  const handleDropdown = () => {
    setOpenDropDown(!openDropdown);
  };

  const btnColor = `transition duration-300 ease-in-out`;
  const activeLink = `bg-yellow-400 w-full px-10 py-2 rounded-[4px] text-black`;
  return (
    <header className="bg-[rgba(0,0,0,0.8)] shadow-md py-4 px-4 xl:px-8 fixed top-0 left-0 right-0  w-full z-[5]">
      <div>
        <div className="flex justify-between xl:gap-4">
          <div className="text-white text-[32px] font-bold py-1">
            <NavLink to={"/"}>
              <h1>
                GP
                <span className="text-yellow-400">.</span>
              </h1>
            </NavLink>
          </div>
          <nav
            className={`lg:block ${
              showMen
                ? "block bg-white fixed top-0 left-0 bottom-0 w-[250px]"
                : "hidden"
            }`}
          >
            <div
              onClick={handleMen}
              className="absolute top-0 right-0 p-4 lg:hidden xl:hidden"
            >
              <RxCross2 />
            </div>
            <ul className=" gap-4 px-[1.5rem] pt-[3rem]  lg:px-0 lg:pt-0 flex flex-col lg:flex-row xl:gap-6 text-[16px] text-black lg:text-white items-start lg:items-center justify-center text-center font-poppins">
              <li
                onClick={() => setShowMen(false)}
                className={`${btnColor}  ${pathname === "/" && activeLink}`}
              >
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li
                onClick={() => setShowMen(false)}
                className={`${btnColor}  ${
                  pathname === "/about" && activeLink
                }`}
              >
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li
                onClick={() => setShowMen(false)}
                className={`${btnColor}  ${
                  pathname === "/services" && activeLink
                }`}
              >
                <NavLink to={"/services"}>Services</NavLink>
              </li>
              <li
                onClick={() => setShowMen(false)}
                className={`${btnColor}  ${
                  pathname === "/portfolio" && activeLink
                }`}
              >
                <NavLink to={"/portfolio"}>Portfolio</NavLink>
              </li>
              <li
                onClick={() => setShowMen(false)}
                className={`${btnColor}  ${pathname === "/team" && activeLink}`}
              >
                <NavLink to={"/team"}>Team</NavLink>
              </li>
              <li className={btnColor}>
                <Dropdown
                  openDropdown={openDropdown}
                  setOpenDropDown={setOpenDropDown}
                  handleDropdown={handleDropdown}
                />
              </li>

              <li
                onClick={() => setShowMen(false)}
                className={`${btnColor}  ${
                  pathname === "/contact" && activeLink
                }`}
              >
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
            </ul>
          </nav>
          {/* button and hambur */}
          <div className="flex gap-[1rem] items-center">
            <div className="text-white border-2 border-yellow-400 rounded-[4px] px-[2.7rem] py-[7px] hover:bg-yellow-400 hover:text-black transition duration-300 ease-in-out cursor-pointer">
              <NavLink to={"/about"}>
                <button className="cursor-pointer font-roboto ">
                  {/* text-[11px] */}
                  Get Start
                </button>
              </NavLink>
            </div>
            <div className="flex pointer lg:hidden xl:hidden">
              <button onClick={handleMen}>
                <RxHamburgerMenu className="text-white w-[2rem] h-[2rem]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
