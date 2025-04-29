import { ClientSwiperCom } from "../components/UI/ClientSwiperCom";
import { Hero } from "../components/UI/Hero";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Portfolio from "../components/sections/Portfolio";
import Services from "../components/sections/Services";
import Team from "../components/sections/Team";

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <ClientSwiperCom />
      <Team />
      <Contact />
    </>
  );
};
