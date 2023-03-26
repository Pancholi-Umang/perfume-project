import React, { useState } from "react";
import "./Registration.css";
import { Link, useNavigate } from "react-router-dom";
import Footer2 from "../Components/Footer2";
import axios from "axios";

function Registration() {

  const navigate = useNavigate();

  const [inputs, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    pass: "",
  });

  // const [values, setValues] = useState([]);

  const handleChange = (event) => {
    setInput((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
  };

  const validate = (e)=>{
    e.preventDefault();
 
    // const {firstName,lastName,email,pass} = inputs;
    // if(firstName === ""){
    //   alert("FirstName field is required")
    // }else if(lastName === ""){
    //   alert("LastName field is required")
    // }else if(email === ""){
    //   alert("email field is required");
    // }else if(!email.includes("@")){
    //   alert("plz enter valid email address")
    // }else if(pass === ""){
    //   alert("Password field is required")
    // }else if(pass.length < 5){
    //   alert("password length greater than")
    // }else{
    //   console.log("data successfully");
    //   navigate('/login');
    // }

    // const sendData = {
    //   firstName:inputs.firstName,
    //   lastName:inputs.lastName,
    //   email:inputs.email,
    //   pass:inputs.pass
    //   }

    axios.post('http://localhost/perfume/api/save', inputs).then(function(response){
      // if(response.inputs.Status === 'Invalid'){
      //   alert('Invalid user')
      // }
    console.log(response.data);
    navigate('/login');
    });
  }

  // const validate = () => {
  //   if (values.firstName.length > 15) {
  //     alert(" FirstName Must be 15 characters or less")
  //   }
    
  //   else if (values.lastName.length > 20) {
  //     alert(" LastName Must be 20 characters or less")
  //   }

  //   else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //     alert(" Invalid email address ")
  //   }

  //   else{
  //     return values;
  //   }
  // };

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
                value={inputs.firstName}
                onChange={handleChange}
                id="firstName"
                name="firstName"
                placeholder="First Name"
                // autoComplete="off"
                
              />
            </div>

            <div className="form-group mt-3">
              <label className="mb-1">Last Name </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="form-control"
                onChange={handleChange}
                value={inputs.lastName}
                placeholder="LastName"
                // autoComplete="off"
              />
            </div>
            <div className="form-group mt-3">
              <label className="mb-1">email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                onChange={handleChange}
                value={inputs.email}
                placeholder="Email"
                // autoComplete="off"
                
              />
            </div>

            <div className="form-group mt-3">
              <label className="mb-1">Password</label>
              <input
                className="form-control"
                type="password"
                id="pass"
                name="pass"
                onChange={handleChange}
                value={inputs.pass}
                placeholder="Password"
                // autoComplete="off"
                
              />
            </div>

            <div className="d-grid gap-2 mt-3">
              <button
                type="submit"
                name="add"
                // onClick={(e) => RedirectToLogin(e)}
                className="btn btn-primary"
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