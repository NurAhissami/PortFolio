import React from "react";

function Proyecto(props) {
  return (
    <div className="proyectos__rectangle">
      <h3 className="proyectos__name">{props.name}</h3>
      <p className="proyectos__description">{props.description}</p>

      <ul className="proyectos__list">
        <li className="proyectos__list--link">
          <a href={props.repo} target="_blank">
            <i className="proyectos__enlace--icon fas fa-code"></i>
          </a>
        </li>
        <li className="proyectos__list--link">
          <a className="proyectos__enlace" href={props.web} target="_blank">
            <i className="proyectos__enlace--icon fas fa-laptop"></i>
          </a>
        </li>
      </ul>
      <img className="proyectos__image" src={props.img} alt={props.name} />
    </div>
  );
}
export default Proyecto;
