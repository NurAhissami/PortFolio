import React from "react";

import HeroContact from "./HeroContact";

function PaginaContacto() {
  return (
    <>
      <HeroContact />
      <section className="contact">
        <h2 className="contact">Contacto</h2>
        <p>
          ¿Hablamos? 📞. Si crees que mi perfil profesional encaja con lo que
          buscas o quieres darme feedback sobre mis proyectos, ¡no dudes en
          contactarme! 📩
        </p>
        <p>Puedes contactar conmigo al correo:</p>
        <a href="mailto:nurahi10@gmail.com">nurahi10@gmail.com</a>
        <p>A través de estos enlaces:</p>
        <a href="https://github.com/NurAhissami" alt="GitHub Nur Ahissami">
          <i className="fab fa-github-alt"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/nur-ahissami-1a7b24157/"
          alt="Linkedin Nur Ahissami"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://www.instagram.com/nurahissami.design/"
          alt="Instagram Nur Ahissami"
        >
          <i className="fab fa-instagram-square"></i>
        </a>
        <p>O si lo prefieres, rellenando este formulario:</p>
        <div className="container">
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
