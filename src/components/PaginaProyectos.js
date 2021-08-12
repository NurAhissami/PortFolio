import Proyecto from "./Proyecto";
import React from "react";

import data from "../data/projects.json";
import HeroProjects from "./HeroProjects";
import SocialMedia from "./SocialMedia";

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
    <>
      <HeroProjects />
      <section className="container">
        <h2 className="title">Proyectos</h2>
        <ul className="projects-list">{projects}</ul>
      </section>
    </>
  );
}
export default Proyectos;
