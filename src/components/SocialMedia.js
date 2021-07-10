import React from 'react';

function SocialMedia() {
  return (
    <section className="bg-sm">
      <div className="sm">
        <nav>
          <ul className="sm__list">
            <li>
              <a className="sm__link" href="" target="_blank">
                <i className="sm__link--icon fab fa-github-alt"></i>
              </a>
            </li>
            <li>
              <a className="sm__link" href="" target="_blank">
                <i className="sm__link--icon fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a className="sm__link" href="" target="_blank">
                <i className="sm__link--icon fab fa-instagram-square"></i>{' '}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
export default SocialMedia;
