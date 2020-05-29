import React from 'react';
import { Persona } from './Persona';
import { Form } from './Form';
import { Teacher } from './Teacher';

import './Information.css';

export const Information = () => {
  return (
    <div className="container">
      <div className="information-container">
        <h3 className="information-title">
          Do you want to learn a new in-high demand{' '}
          <span className="highlighted">Skill?</span>
        </h3>
        <div className="paragraph-box">
          <p id="info-paragraph" className="information-paragraph">
            Join us in a <strong>four</strong> week journey to understand and
            apply the main components of web development. Learn by using the
            best coding practices with cool projects to enhance your knowledge.
            After the course you would understand the basics of HTML, CSS and
            Javascript{' '}
            <span role="img" aria-label="hello">
              🚀
            </span>{' '}
          </p>
          {/* <p className="information-list">
            Programming Languages teached at the course:
          </p> */}
        </div>
        <div className="languages-images">
          <img
            id="css-logo"
            className="programming-images"
            alt="symbols"
            src="https://res.cloudinary.com/spread-the-love/image/upload/v1590738231/CSS3_logo_and_wordmark.svg_cqn1xg.png"
          />
          <img
            id="html-logo"
            className="programming-images"
            alt="symbols"
            src="https://res.cloudinary.com/spread-the-love/image/upload/v1590738546/512px-HTML5_logo_and_wordmark.svg_rmdc51.png"
          />
          <img
            id="js-logo"
            className="programming-images"
            alt="symbols"
            src="https://res.cloudinary.com/spread-the-love/image/upload/v1590738416/javascript-logo-E967E87D74-seeklogo.com_m4jlyh.png"
          />
        </div>
      </div>
      <div>
        <hr></hr>
        <Persona />
      </div>
      <div>
        <hr></hr>
        <div className="course-container">
          <div>
            <Form />
          </div>
          <div className="course-content">
            <h1 className="course-header">
              Course <span className="highlighted-course">Content</span>
            </h1>
            <div>
              <h3>
                Format of the course:{' '}
                <span className="container-span">Online - Zoom</span>
              </h3>
              <h3>
                Number of Students: <span className="container-span">50</span>
              </h3>
              <h3>
                Course Duration: <span className="container-span">4 weeks</span>
              </h3>
              <h3>
                Cost: <span className="container-span">Free of charge</span>
              </h3>
              <h3 className="course-secondary-title">Kick-off Session</h3>
              <li className="course-list">
                June 10th (19:00 - 21:00) - Setup and Introduction to CSS and
                HTML
              </li>
              <h3 className="course-secondary-title">First Project</h3>
              <li className="course-list">
                June 17th (19:00 - 21:00) - Build and deploy your first website
                (Profile site)
              </li>
              <h3 className="course-secondary-title">Second Project</h3>
              <li className="course-list">
                June 24th (19:00 - 21:00) - Build and deploy a fully responsive
                startup website
              </li>
              <h3 className="course-secondary-title">
                Introduction to Javascript
              </h3>
              <li className="course-list">
                July 1st (19:00 - 21:00) - Introduction to Javascript. Build and
                code an application using Vanilla JS.
              </li>
              <h3 className="course-secondary-title">Wrap up session</h3>
              <li className="course-list">
                July 1st (21:00 - 21:30) - Wrap up session and round table with
                students
              </li>
            </div>
          </div>
        </div>
        <hr></hr>
        <div>
          <Teacher />
        </div>
      </div>
      <div className="footer">Footer</div>
    </div>
  );
};
