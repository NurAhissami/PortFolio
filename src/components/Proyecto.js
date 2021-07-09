import React from 'react';

function Proyecto(props) {
  return (
    <article className="proyectos">
      <div className="proyectos__rectangle">
        <h3 className="proyectos__name">{props.name}</h3>
        <p className="proyectos__description">{props.description}</p>

        <ul className="proyectos__list">
          <li>
            <a href={props.web}>Página web</a>
          </li>
          <li>
            <a href={props.web}>Repositorio</a>
          </li>
        </ul>
        <img src={props.img} alt={props.name} />
      </div>
    </article>
  );
}
export default Proyecto;
