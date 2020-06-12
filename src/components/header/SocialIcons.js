import React from 'react';

import '../../styles/header/SocialIcons.scss';

export default function SocialIcons() {
  return (
    <div className="social-icons-container">
      <a href="https://www.twitter.com/mynameischrisa">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://www.linkedin/in/chrisstanarsenault">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://www.github.com/chrisstanarsenault">
        <i className="fab fa-github"></i>
      </a>
      <a href="mailto: chrisstanarsenault@gmail.com">
        <i className="fas fa-envelope"></i>
      </a>
    </div>
  );
}
