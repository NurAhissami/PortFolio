import Proyecto from "./Proyecto";
import React from "react";

import { Link } from "react-router-dom";

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

  const index = projects.slice(0, 3);

  return (
    <section className="section-proyects">
      <h2 className="title">Proyectos</h2>
      <ul className="projects-list">{index}</ul>
      <Link to="/proyectos" className="proyectos__button">
        Ver más
      </Link>
    </section>
  );
}
export default Proyectos;
