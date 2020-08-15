import React from "react";

//comps
import { Greeting } from "./Components/Greeting";
import { Section1 } from "./Components/Section1";
import { Section2 } from "./Components/Section2";

const Home = () => {
  return (
    <>
      <Greeting />
      <Section1 />
      <Section2 />
    </>
  );
};

export { Home };
