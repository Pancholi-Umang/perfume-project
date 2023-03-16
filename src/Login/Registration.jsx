import React, { useState } from "react";
import "./Registration.css";
import { Link } from "react-router-dom";
import Footer2 from "../Components/Footer2";

function Registration() {

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
  };

  const validate = () => {
    if (values.firstName.length > 15) {
      alert(" FirstName Must be 15 characters or less")
    }
    
    else if (values.lastName.length > 20) {
      alert(" LastName Must be 20 characters or less")
    }

    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      alert(" Invalid email address ")
    }

    else{
      return values;
    }
  };

  // setBodyColor({color: "#6c7177"})
  return (
    <>
      <div className="Auth-form-container-registration">
        <form className="Auth-form" onSubmit={validate}> 
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>

            <div className="form-group mt-3">
              <label className="mb-1">First Name </label>
              <input
                className="form-control"
                type="text"
                value={values.firstName}
                onChange={handleChange}
                id="firstName"
                placeholder="First Name"
                autoComplete="off"
                name="firstName"
              />
            </div>

            <div className="form-group mt-3">
              <label className="mb-1">Last Name </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="form-control"
                onChange={handleChange}
                value={values.lastName}
                placeholder="LastName"
                autoComplete="off"
              />
            </div>
            <div className="form-group mt-3">
              <label className="mb-1">email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                onChange={handleChange}
                value={values.email}
                placeholder="Email"
                autoComplete="off"
                name="email"
              />
            </div>

            <div className="form-group mt-3">
              <label className="mb-1">Password</label>
              <input
                className="form-control"
                type="password"
                id="password"
                onChange={handleChange}
                value={values.password}
                placeholder="Password"
                autoComplete="off"
                name="password"
              />
            </div>

            <div className="d-grid gap-2 mt-3">
              <button
                type="submit"
                // onClick={(e) => RedirectToLogin(e)}
                className="btn btn-primary"
                onClick={validate}
              >
                Submit
              </button>
            </div>

            <p className="forgot-password text-right mt-2">
              <Link to="/login" className="mt-1 anchorRemove">
                If you already have an account
              </Link>
            </p>
          </div>
        </form>
      </div>
      <Footer2 />
    </>
  );
}
export default Registration;
