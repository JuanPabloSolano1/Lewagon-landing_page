import React from 'react';
import './Form.css';
import { useReducer } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

export const Form = ({ id, students }) => {
  const [newValues, setValues] = useReducer(
    (state, setState) => ({
      ...state,
      ...setState,
    }),
    {
      name: '',
      last_name: '',
      email: '',
    }
  );

  const handleChange = (event) => {
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;
    setValues({ [name]: value });
  };
  const handleClick = (event) => {
    event.preventDefault();
    let post = {
      name: newValues.name,
      last_name: newValues.last_name,
      email: newValues.email,
      date: new Date(),
      id: id + 1,
    };
    axios
      .post('https://le-wagon-4622e.firebaseio.com/contacts.json', post)
      .then((response) => {
        console.log(response);
        swal('The form has been succesfully submitted');
        let inputs = document.getElementsByTagName('input');
        for (let i = 0; i < inputs.length - 1; i++) {
          inputs[i].value = '';
        }
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div>
      <form id="reset" className="form" onSubmit={handleClick}>
        <div className="form-header">
          <p>Register until June 9th</p>
        </div>
        <div className="first-label">
          <div>
            <label>Name*</label>
          </div>
          <input
            name="name"
            onChange={handleChange}
            type="text"
            className="form-input"
            required
          ></input>
        </div>
        <div>
          <div>
            <label>Last Name*</label>
          </div>
          <input
            name="last_name"
            onChange={handleChange}
            type="text"
            className="form-input"
            required
          ></input>
        </div>
        <div>
          <div>
            <label>Email*</label>
          </div>
          <input
            name="email"
            onChange={handleChange}
            type="email"
            className="form-input"
            required
          ></input>
        </div>
        <div className="submit-container">
          {students > 0 ? (
            <input
              // onClick={handleClick}
              className="submit"
              type="submit"
              value="Register"
            ></input>
          ) : (
            <input
              // onClick={handleClick}
              className="submit"
              type="submit"
              value="Register"
              disabled
            ></input>
          )}
        </div>
      </form>
    </div>
  );
};
