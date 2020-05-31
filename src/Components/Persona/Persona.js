import React from 'react';
import './Persona.css';

export const Persona = () => {
  return (
    <div className="persona-container">
      <div className="persona-information">
        <h1>
          Who can <span className="persona-span">Apply?</span>
        </h1>
        <p>
          Anybody that is motivated and eager to learn the basics of coding. The
          course is specially designed for{' '}
          <strong className="persona-strong">beginners</strong> and no technical
          background is needed.
          <br></br>
          <br></br>
          During the session there would be two teachers always ready to answer
          any question and give the guidance that is needed to finish every
          project.
          <br></br>
          <br></br>
          Do you have any questions about the course? Please send as an email.
        </p>
      </div>
      <div>
        <img
          className="persona-image"
          alt="lewagon"
          src="https://res.cloudinary.com/spread-the-love/image/upload/v1590678936/Screenshot_2020-05-28_17.15.13_sfghft.png"
        />
      </div>
    </div>
  );
};
