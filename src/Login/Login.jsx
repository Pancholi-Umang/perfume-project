import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer2 from "../Components/Footer2";
import axios from "axios";

function Login() {
  const [Users, setUsers] = useState([]);
  const [valing, setValing] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [eshowAlert, seteShowAlert] = useState(false);
  const [LoginUser, setLoginUser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const navigate = useNavigate();

  const initialVal = {
    email: "",
    password: "",
  };
  const [inputs, setInput] = useState(initialVal);
  const [errors, setErrors] = useState({});

  const validateLoginForm = (inputs) => {
    const errors = {};

    if (!inputs.email.trim()) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputs.email.trim())
    ) {
      errors.email = "Invalid email address";
    }

    if (!inputs.password.trim()) {
      errors.password = "Password is required";
    } else if (inputs.password.trim().length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    return errors;
  };

  const userLoginLocalStorage = (data) => {
    setLoginUser({ ...LoginUser, data });
  };

  useEffect(() => {
    localStorage.setItem("LoginDetails", JSON.stringify(LoginUser));
  }, [LoginUser]);

  const handleLogin = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      navigate("/profile");
    }, 2000);
  };

  const errorLogin = () => {
    seteShowAlert(true);
    setTimeout(() => {
      seteShowAlert(false);
    }, 2500);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...inputs, [name]: value });
  };

  const GetUser = () => {
    axios
      .get(`https://registration-login-23503-default-rtdb.firebaseio.com/login.json`)
      .then((response) => {
        setUsers(response.data);
      });
  };

  useEffect(() => {
    GetUser();
  }, []);

  var allUser = [];
  for (let key in Users) {
    allUser.push(Object.assign(Users[key], { id: key }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateLoginForm(inputs);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      allUser.find((data) => {
        if (data.email === inputs.email && data.password === inputs.password) {
          setValing(data);
          userLoginLocalStorage(data);
          handleLogin();
        } else if (
          data.email !== inputs.email &&
          data.password !== inputs.password
        ) {
          errorLogin();
        }
      });
    }
  };

  return (
    <>
      {showAlert && (
        <div className="container">
          <div
            className="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            welcome
            <span className="text-dark ">
              <strong>
                {valing?.firstName} {valing?.lastName} !
              </strong>
            </span>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </div>
      )}
      {eshowAlert && (
        <div className={`${showAlert ? "d-none" : "container"}`}>
          <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            Please Fill Correct Data
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </div>
      )}

      {loading ? (
        <div className="containes">
          <div className="item1-1"></div>
          <div className="item2-2"></div>
          <div className="item3-3"></div>
          <div className="item4-4"></div>
          <div className="item5-5"></div>
        </div>
      ) : (
        <div className="containersetHeight">
          <div className="Auth-form-container container">
            <form className="Auth-form" onSubmit={handleSubmit}>
              <div className="Auth-form-content">
                <h3 className="Auth-form-title">Sign In</h3>
                <div className="form-group mt-3">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control mt-1"
                    placeholder="Enter email"
                    onChange={handleChange}
                    name="email"
                    value={inputs.email}
                  />
                </div>
                {errors?.email && (
                  <span className="text-danger">{errors?.email}</span>
                )}

                <div className="form-group mt-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Enter password"
                    onChange={handleChange}
                    name="password"
                    value={inputs.password}
                  />
                </div>
                {errors?.password && (
                  <span className="text-danger">{errors?.password}</span>
                )}

                <div className="d-grid gap-2 mt-3">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
                <p className="forgot-password text-right mt-2">
                  <Link to="/reg" className="mt-1 anchorRemove">
                    Create An Account
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
      <Footer2 />
    </>
  );
}

export default Login;
