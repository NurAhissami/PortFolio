import {Link} from 'react-router-dom';
import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header__rectangle"></div>

      <nav>
        <ul className="header__list">
          <li className="header__list--li">
            <Link to="/">Home</Link>
          </li>
          <li className="header__list--li">
            <Link to="/sobremi">Sobre mi</Link>
          </li>
          <li className="header__list--li">
            <Link to="/proyectos">Proyectos</Link>
          </li>
          <li className="header__list--li">
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
      <div className="header__rectangle"></div>
    </header>
  );
}
export default Header;
