import React from 'react';

function SocialMedia() {
  return (
    <nav className="sm">
      <ul className="sm__list">
        <li>
          <a
            className="sm__link"
            href="https://github.com/NurAhissami"
            target="_blank"
            alt="github"
          >
            <i className="sm__link--icon fab fa-github-alt"></i>
          </a>
        </li>
        <li>
          <a
            className="sm__link"
            href="https://www.linkedin.com/in/nur-ahissami-1a7b24157/"
            target="_blank"
            alt="linkedin"
          >
            <i className="sm__link--icon fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a
            className="sm__link"
            href="https://www.instagram.com/nurahissami.design/"
            target="_blank"
            alt="instagram"
          >
            <i className="sm__link--icon fab fa-instagram-square"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default SocialMedia;
