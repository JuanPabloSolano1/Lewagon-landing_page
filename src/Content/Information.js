import React from 'react';
import { Persona } from '../Components/Persona/Persona';
import { Form } from '../Components/Form/Form';
import { Teacher } from '../Components/Teacher/Teacher';
import { Footer } from '../Components/Footer/Footer';
import axios from 'axios';

import './Information.css';

export class Information extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      id: [],
    };
  }
  componentDidMount() {
    axios
      .get('https://le-wagon-4622e.firebaseio.com/contacts.json')
      .then((response) => {
        this.setState({
          students: 50 - Object.keys(response.data).length,
          id: Object.keys(response.data).length,
        });
      })
      .catch((error) => console.log(error));
  }
  render() {
    const { students, id } = this.state;
    console.log(id);
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
              best coding practices with cool projects to enhance your
              knowledge. After the course you would understand the basics of
              HTML, CSS and Javascript.{' '}
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
              <div className="course-content">
                <h1 className="course-header">
                  Course <span className="highlighted-course">Content</span>
                </h1>
                <h3 className="course-secondary-title">Kick-off Session</h3>
                <li className="course-list">
                  <strong>June 10th (19:00 - 21:00)</strong> - Setup and
                  Introduction to CSS and HTML
                </li>
                <h3 className="course-secondary-title">First Project</h3>
                <li className="course-list">
                  <strong>June 17th (19:00 - 21:00) </strong> - Build and deploy
                  your first website (Profile site)
                </li>
                <h3 className="course-secondary-title">Second Project</h3>
                <li className="course-list">
                  <strong>June 24th (19:00 - 21:00) </strong> - Build and deploy
                  a fully responsive startup website
                </li>
                <h3 className="course-secondary-title">
                  Introduction to Javascript
                </h3>
                <li className="course-list">
                  <strong>July 1st (19:00 - 21:00)</strong> - Introduction to
                  Javascript. Build and code an application using Vanilla JS.
                </li>
                <h3 className="course-secondary-title">Wrap up session</h3>
                <li className="course-list">
                  <strong>July 1st (21:00 - 21:30) </strong> - Wrap up session
                  and round table with students
                </li>
              </div>
            </div>
            <div className="form-container-text">
              <div>
                <Form id={id} />
              </div>
              <div className="course-information">
                <div className="course-box">
                  <h3 className="course-title">
                    Format of the Course <br></br>
                    <div className="span-course">
                      <span className="container-span">
                        <span role="img" aria-label="icon">
                          💻
                        </span>{' '}
                        Online - Zoom
                      </span>
                    </div>
                  </h3>
                </div>
                <div className="course-box">
                  <h3 className="course-title">
                    Number of Available spots<br></br>{' '}
                    <div className="span-course">
                      <span className="container-span">
                        <span role="img" aria-label="icon">
                          👥
                        </span>{' '}
                        {students <= 0 ? 50 : students}
                      </span>
                    </div>
                  </h3>
                </div>
                <div className="course-box">
                  <h3 className="course-title">
                    Course Duration <br></br>
                    <div className="span-course">
                      <span className="container-span">
                        <span role="img" aria-label="icon">
                          ⏰
                        </span>{' '}
                        4 weeks
                      </span>
                    </div>
                  </h3>
                </div>
                <div className="course-box">
                  <h3 className="course-title">
                    Cost <br></br>
                    <div className="span-course">
                      <span className="container-span">
                        <span role="img" aria-label="icon">
                          💳
                        </span>{' '}
                        Free of charge
                      </span>
                    </div>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <div>
            <Teacher />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
