import React from "react";
import { Hero, Barra, Recomendaciones, Footer } from "./components/index";

export const Body = () => {
  return (
    <>
      <Barra />
      <div id="presentacion">
        <Hero />
      </div>
      <Recomendaciones />
      <Footer />
    </>
  );
};
