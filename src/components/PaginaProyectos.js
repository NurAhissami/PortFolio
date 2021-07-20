import Proyecto from "./Proyecto";
import React from "react";

import data from "../data/projects.json";

function Proyectos() {
  const projects = data.map((project) => {
    return (
      <li key={project.id}>
        <Proyecto
          name={project.name}
          description={project.tools}
          web={project.web}
          repo={project.git}
          img={project.img}
        />
      </li>
    );
  });
  return (
    <section className="section-proyects">
      <h2 className="title">Proyectos</h2>
      <ul className="projects-list">{projects}</ul>
      <a className="proyectos__button" href="/proyectos">
        Ver más
      </a>
    </section>
  );
}
export default Proyectos;
