import React from 'react';

function SobreMi() {
  return (
    <section>
      <h2 className="title" id="sobremi">
        Sobre mí
      </h2>
      <div className="about">
        {/* <img src="" alt="Nur" /> */}
        <p className="about__text">
          Soy una persona muy <b>alegre</b>, positiva y empática,
          <b>habituada a trabajar en equipo</b> y crear un buen ambiente de
          confianza. Me adapto muy bien a los cambios y, como buena
          <b>diseñadora, organizada</b> y perfeccionista cuidando hasta el más
          útlimo detalle.
        </p>
        <p className="about__text">
          Una persona perseverante y con motivación que le gusta{' '}
          <b>resolver problemas</b> y <b>afrontar nuevos retos</b>, y por eso
          mismo me encanta aprender cosas nuevas y aplicarlas para obtener
          mejores resultados.
        </p>
        <p className="about__text">Para saber más sobre mí, ¡contáctame!</p>
        <a href="/contacto" className="about__button">
          Contacto
        </a>
      </div>
    </section>
  );
}
export default SobreMi;
