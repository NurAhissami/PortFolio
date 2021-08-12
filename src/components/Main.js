import React from "react";

import Hero from "./Hero";
import Proyectos from "./Proyectos";
import Habilidades from "./Habilidades";
import SobreMi from "./SobreMi";

function Main() {
  return (
    <section className="container">
      <Hero />
      <Proyectos />
      <Habilidades />
      <SobreMi />
    </section>
  );
}
export default Main;
