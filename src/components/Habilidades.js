import React from 'react';

//images
import ai from '../images/ai.png';
import autocad from '../images/autocad.png';
import boots from '../images/boots.png';
import code from '../images/code.png';
import css from '../images/css.png';
import git from '../images/git.png';
import github from '../images/github.png';
import gulp from '../images/gulp.png';
import html from '../images/html.png';
import id from '../images/id.png';
import js from '../images/js.png';
import node from '../images/node.png';
import npm from '../images/npm.png';
import ps from '../images/ps.png';
import react from '../images/react.png';
import sass from '../images/sass.png';
import sketch from '../images/sketch.png';
import slack from '../images/slack.png';
import trello from '../images/trello.png';
import xd from '../images/xd.png';
import zeplin from '../images/zeplin.png';
import nodejs from '../images/nodejs.png';

function Habilidades() {
  return (
    <section className="">
      <h2 className="title">Habilidades</h2>
      <article className="skills">
        <h4 className="skills__title">Programación</h4>
        <ul className="skills__container">
          <li className="skills__list">
            <img className="skills__image" alt="HTML5" src={html} />
          </li>
          <li className="skills__list">
            <img className="skills__image" alt="CSS3" src={css} />
          </li>
          <li className="skills__list">
            <img className="skills__image" alt="JavaScript" src={js} />
          </li>
          <li className="skills__list">
            <img className="skills__image" src={react} alt="react" />
          </li>
          <li className="skills__list">
            <img className="skills__image" alt="Gulp" src={gulp} />
          </li>
          <li className="skills__list">
            <img className="skills__image" alt="Git" src={git} />
          </li>
          <li className="skills__list">
            <img className="skills__image" alt="Node.js" src={node} />
          </li>
          <li className="skills__list">
            <img className="skills__image" alt="Bootstrap" src={boots} />
          </li>
          <li className="skills__list">
            <img className="skills__image" alt="Sass" src={sass} />
          </li>
          <li className="skills__list">
            <img className="skills__image" src={nodejs} alt="nodejs" />
          </li>
        </ul>
      </article>
      <article className="skills">
        <h4 className="skills__title">Diseño Gráfico</h4>
        <ul className="skills__container">
          <li className="skills__list">
            <img className="skills__image" alt="AutoCad" src={autocad} />
          </li>
          <li className="skills__list">
            <img className="skills__image" alt="Indesign" src={id} />
          </li>
          <li className="skills__list">
            <img className="skills__image" alt="Illustrator" src={ai} />
          </li>
          <li className="skills__list">
            <img className="skills__image" alt="Photoshop" src={ps} />
          </li>
          <li className="skills__list">
            <img className="skills__image" src={sketch} alt="sketch" />
          </li>
          <li className="skills__list">
            <img className="skills__image" src={xd} alt="xd" />
          </li>
        </ul>
      </article>
      <article className="skills">
        <h3 className="skills__title">Herramientas</h3>
        <ul className="skills__container">
          <li className="skills__list">
            <img className="skills__image" alt="Github" src={github} />
          </li>
          <li className="skills__list">
            <img className="skills__image" alt="Npm" src={npm} />
          </li>
          <li className="skills__list">
            <img
              className="skills__image"
              alt="Visual Studio Code"
              src={code}
            />
          </li>
          <li className="skills__list">
            <img className="skills__image" alt="Zeplin" src={zeplin} />
          </li>
          <li className="skills__list">
            <img className="skills__image" alt="Trello" src={trello} />
          </li>
          <li className="skills__list">
            <img className="skills__image" alt="Slack" src={slack} />
          </li>
        </ul>
      </article>
    </section>
  );
}
export default Habilidades;
