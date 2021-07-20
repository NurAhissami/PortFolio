import React from "react";

import HeroContact from "./HeroContact";

function PaginaContacto() {
  return (
    <>
      <HeroContact />
      <section className="contact">
        <h2 className="contact__title">Contacto</h2>
        <p className="contact__text">
          ¿Hablamos? 📞. Si crees que mi perfil profesional encaja con lo que
          buscas o quieres darme feedback sobre mis proyectos, ¡no dudes en
          contactarme! 📩
        </p>
        <p className="contact__text">Puedes contactar conmigo al correo:</p>
        <a className="contact__link" href="mailto:nurahi10@gmail.com">
          nurahi10@gmail.com
        </a>
        <p className="contact__text">o a través de estos enlaces:</p>
        <a
          className="contact__link"
          href="https://github.com/NurAhissami"
          alt="GitHub Nur Ahissami"
        >
          <i className="fab fa-github-alt"></i>
        </a>
        <a
          className="contact__link"
          href="https://www.linkedin.com/in/nur-ahissami-1a7b24157/"
          alt="Linkedin Nur Ahissami"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          className="contact__link"
          href="https://www.instagram.com/nurahissami.design/"
          alt="Instagram Nur Ahissami"
        >
          <i className="fab fa-instagram-square"></i>
        </a>
        <p>O si lo prefieres, rellenando este formulario:</p>
        <div className="containerform">
          <form action="/action_page.php">
            <label htmlFor="fname">Nombre</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Tu nombre.."
            />

            <label htmlFor="lname">Apellido</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Apellido.."
            />
            <label htmlFor="email">Email</label>
            <input
              type="mail"
              id="email"
              name="email"
              placeholder="tuemail@email.com"
            />

            <label htmlFor="subject">Mensaje</label>
            <input
              type="textarea"
              id="subject"
              name="subject"
              placeholder="Escribe tu texto.."
            />

            <input type="submit" value="Enviar" />
          </form>
        </div>
      </section>
    </>
  );
}
export default PaginaContacto;
