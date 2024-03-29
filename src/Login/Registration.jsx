import React, { useState, useEffect } from "react";
import "./Registration.css";
import { Link, useNavigate } from "react-router-dom";
import Footer2 from "../Components/Footer2";
import axios from "axios";
import { getRegistration } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

function Registration() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);
  const handleLogin = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  const UsersDetails = useSelector((state) => state.registration.register);

  useEffect(() => {
    dispatch(getRegistration());
  }, []);

  var allUser = [];
  for (let key in UsersDetails) {
    allUser.push(Object.assign(UsersDetails[key], { id: key }));
  }

  const validateForm = (formValues) => {
    const errors = {};
    if (!formValues.firstName?.trim()) {
      errors.firstName = "First Name is required";
    }
    if (!formValues.lastName?.trim()) {
      errors.lastName = "Last Name is required";
    }
    if (!formValues.email?.trim()) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        formValues?.email?.trim()
      )
    ) {
      errors.email = "Invalid email address";
    }
    if (!formValues.password?.trim()) {
      errors.password = "Password is required";
    } else if (formValues.password.trim().length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }
    return errors;
  };

  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  const handleChange = (event) => {
    if (event.target.name == "email") {
      console.log(event.target.value);
    }
    setFormValues((prevValues) => ({
      ...prevValues,
      [event?.target?.name]: event?.target?.value,
    }));
  };

  const validate = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formValues);
    setErrors(validationErrors);

    if (Object?.keys(validationErrors)?.length === 0) {
      axios.post(`https://registration-login-23503-default-rtdb.firebaseio.com/login.json`,formValues)
        .then(function (response) {
          handleLogin();
          setTimeout(() => {
            navigate("/login");
          }, 1000);
        });
    }
  };

  return (
    <>
      {showAlert && (
        <div className="container">
          <div className="alert alert-success alert-dismissible fade show" role="alert" >
            <span className="text-dark ">
              <strong> Registration Successfull..... </strong>
            </span>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" ></button>
          </div>
        </div>
      )}
      <div className="Auth-form-container-registration">
        <form className="Auth-form" onSubmit={validate}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>

            <div className="form-group mt-3">
              <label className="mb-1">First Name </label>
              <input
                className="form-control"
                type="text"
                value={formValues?.firstName}
                onChange={handleChange}
                id="firstName"
                name="firstName"
                placeholder="First Name"
                autoComplete="off"
              />
            </div>
            {errors?.firstName && (
              <span className="text-danger">{errors?.firstName}</span>
            )}

            <div className="form-group mt-3">
              <label className="mb-1">Last Name </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="form-control"
                onChange={handleChange}
                value={formValues?.lastName}
                placeholder="LastName"
                autoComplete="off"
              />
            </div>
            {errors?.lastName && (
              <span className="text-danger">{errors?.lastName}</span>
            )}

            <div className="form-group mt-3">
              <label className="mb-1">email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                onChange={handleChange}
                value={formValues?.email}
                placeholder="Email"
                autoComplete="off"
              />
            </div>
            {errors?.email && (
              <span className="text-danger">{errors?.email}</span>
            )}

            <div className="form-group mt-3">
              <label className="mb-1">Password</label>
              <input
                className="form-control"
                type="password"
                id="pass"
                name="password"
                onChange={handleChange}
                value={formValues?.password}
                placeholder="Password"
                autoComplete="off"
              />
            </div>
            {errors?.password && (
              <span className="text-danger">{errors?.password}</span>
            )}

            <div className="d-grid gap-2 mt-3">
              <button type="submit" name="add" className="btn btn-primary">
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