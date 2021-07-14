import Proyecto from './Proyecto';
import React from 'react';
import rick from '../images/filters.png';

function Proyectos() {
  return (
    <section className="section-proyects">
      <h2 className="title">Proyectos</h2>
      <Proyecto
        name="Rick y Morty"
        description="HTML | SASS | REACT"
        web=""
        repo=""
        img={rick}
      />
      <Proyecto
        name="Portfolio"
        description="HTML | SASS | REACT"
        web=""
        repo=""
        img=""
      />
      <Proyecto
        name="Portfolio"
        description="HTML | SASS | REACT"
        web=""
        repo=""
        img=""
      />
      <a className="proyectos__button" href="/proyectos">
        Ver más
      </a>
    </section>
  );
}
export default Proyectos;
