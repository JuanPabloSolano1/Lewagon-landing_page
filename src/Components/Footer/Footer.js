import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import LanguageIcon from '@material-ui/icons/Language';

import './Footer.css';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <div>
          <a href="https://www.linkedin.com/showcase/le-wagon-amsterdam/">
            <LinkedInIcon className="social-media" />
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/lewagonamsterdam/">
            <FacebookIcon className="social-media" />
          </a>
        </div>
        <div>
          <a href="https://www.lewagon.com/amsterdam">
            <LanguageIcon className="social-media" />
          </a>
        </div>
        <div className="footer-copyright">
          This footer is made with <FavoriteIcon className="heart" /> @Le Wagon
        </div>
      </div>
    </div>
  );
};
