import {Link} from 'react-router-dom';
import React from 'react';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="header__list">
          <Link to="/">
            <li className="header__list--li">Home</li>
          </Link>
          <Link to="/sobremi">
            <li className="header__list--li">Sobre mi</li>
          </Link>
          <Link to="/proyectos">
            <li className="header__list--li">Proyectos</li>
          </Link>
          <Link to="/contacto">
            <li className="header__list--li">Contacto</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
