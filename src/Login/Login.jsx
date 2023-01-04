import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

function Login() {
  return (
    <div className="container">
      <div className=" mt-5 d-flex justify-content-center row">

        <div className="bg-warning mt-3 col-md-12 d-flex justify-content-between">
          <div className="col-md-8 mx-auto text-center">
            <h1>Welcome back to </h1>
            <h2 className="white">shineperfumes.com</h2>
          </div>
        </div>

        <form className="col-lg-4 col-md-8">
          <h3 className="text-center mt-3 ">Sign In</h3>
          <div className="mb-3">
            <label className="mb-1">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label className="mb-1">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-primary ">
              Submit
            </button>
            <Link to="/reg" className="mt-1 anchorRemove"> Create An Account</Link>
          </div>
        </form>

      </div>
      <Footer />
    </div>
  );
}

export default Login;
