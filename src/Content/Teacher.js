import React from 'react';
import './Teacher.css';

export const Teacher = () => {
  return (
    <div className="teacher-container">
      <h1>
        Meet our <span className="teacher-heading">Instructor</span>
      </h1>
      <div className="teacher-content">
        <p className="teacher-text">
          Thomas is a front-end developer working for Productpine. A well
          positioned company in Amsterdam.<br></br> <br></br>He specializes in
          building applications with React, Javascript and Typescript. He has
          been teaching in the Le Wagon community for a year now.<br></br>{' '}
          <br></br>
          Thomas loves Kitesurfing and surfing when the wind and waves are
          popping
          <span role="img" aria-label="surfing">
            🏄
          </span>
        </p>
        <img
          className="teacher-image"
          src="https://res.cloudinary.com/spread-the-love/image/upload/v1590750794/Screenshot_2020-05-29_13.00.29_ahzg8g.png"
          alt="thomas"
        />
      </div>
    </div>
  );
};
