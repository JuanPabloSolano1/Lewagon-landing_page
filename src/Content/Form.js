import React from 'react';
import './Form.css';

export const Form = () => {
  return (
    <div>
      <div className="form">
        <div className="form-header">
          <p>Register until June 9th</p>
        </div>
        <div className="first-label">
          <div>
            <label>Name*</label>
          </div>
          <input type="text" className="form-input" required></input>
        </div>
        <div>
          <div>
            <label>Last Name*</label>
          </div>
          <input type="text" className="form-input" required></input>
        </div>
        <div>
          <div>
            <label>Email*</label>
          </div>
          <input type="email" className="form-input" required></input>
        </div>
        <div className="submit-container">
          <input className="submit" type="submit" value="Register"></input>
        </div>
      </div>
    </div>
  );
};
