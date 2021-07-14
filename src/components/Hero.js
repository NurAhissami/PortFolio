import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg"></div>
      <div className="hero__container">
        <div className="hero__title">
          <h3 className="hero__hello">Hola Mundo!</h3>
          <div className="hero__names">
            <span className="hero__names--me"> Soy</span>
            <h1 className="hero__names--name">Nur</h1>
          </div>
        </div>
        <p className="hero__text">
          Soy desarrolladora FrontEnd y diseñadora Gráfica
        </p>
        <a 
        href="#sobremi" className="hero__button">¡Conóceme!</a>
      </div>
      <div className="hero__circle">
        <i className="hero__circle--arrow fas fa-arrow-down"></i>
      </div>
    </section>
  );
}
export default Hero;
