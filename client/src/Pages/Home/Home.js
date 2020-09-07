import React from "react";

//comps
import { Greeting } from "./Components/Greeting";
import { Section1 } from "./Components/Section1";
import { Section2 } from "./Components/Section2";
import { Section3 } from "./Components/Section3";
import { Section4 } from "./Components/Section4";
import { Footer } from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Greeting />
      <Section1 />
      <Section2 />
      <Section4 />
      <Section3 />
      <Footer />
    </>
  );
};

export { Home };
