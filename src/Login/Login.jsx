import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className=" mt-5 d-flex justify-content-center row">
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
          <Link to="/reg" className="anchorRemove"> Create An Account</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
