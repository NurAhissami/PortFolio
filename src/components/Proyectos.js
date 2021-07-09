import Proyecto from './Proyecto';
import React from 'react';

function Proyectos() {
  return (
    <section>
      <h2 className="title">Proyectos</h2>
      <Proyecto
        name="Rick y Morty"
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
      <button>Ver más</button>
    </section>
  );
}
export default Proyectos;
