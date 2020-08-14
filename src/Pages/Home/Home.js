import React from "react";

//comps
import { Greeting } from "./Components/Greeting";
import { Section1 } from "./Components/Section1";

const Home = () => {
  return (
    <>
      <Greeting />
      <Section1 />
      <Greeting />
    </>
  );
};

export { Home };
