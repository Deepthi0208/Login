import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../src/signupscreen.css"

import validate from "../src/validatesignupscreen.js";

function SignUp() {
  const [values, setValues] = useState({
   email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
  };
  return (
   
      <div className="container">
        <div
          id="login-row"
          className="row justify-content-center align-items-center m-3"
        >
          <div className="card custom-card shadow-lg p-3 mb-5 bg-white border">
            <form className="group">
              <div className="input-group form-group ">
               <input
                  type="text"
                  className="form-control def ghi"
                  placeholder="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
              {errors.email && <p className="error">{errors.email}</p>}
              <div className="input-group form-group ">
                <div className="input-group-prepend">
                  
                </div>
                <input
                  type="password"
                  className="form-control def ghi"
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
              </div>
              {errors.password && <p className="error">{errors.password}</p>}
            </form>
          </div>
        </div>
        <div className="text-center">
          <div className="alignment">
            <button
              type="submit"
              name="button"
              className="btn login_btn"
              onClick={handleSubmit}
            >
              SIGN UP
            </button>
          </div>
          <div className="SignUp">
            <p>
              Already registered? &nbsp;
              <Link to="/" className="text1">
                Login Here
              </Link>
            </p>
          </div>
        </div>
      </div>
 
  );
}
export default SignUp;