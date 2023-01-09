import React, { useState } from 'react';
import './Registration.css'
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
// import setBodyColor from '../setBodyColor'

function Registration() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "firstName") {
            setFirstName(value);
        }
        if (id === "lastName") {
            setLastName(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "password") {
            setPassword(value);
        }
        if (id === "confirmPassword") {
            setConfirmPassword(value);
        }

    }
    // setBodyColor({color: "#6c7177"})
    return (
        <>
            <div className="Auth-form-container-registration">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign Up</h3>

                        <div className="form-group mt-3">
                            <label className="mb-1">First Name </label>
                            <input
                                className="form-control"
                                type="text"
                                value={firstName}
                                onChange={(e) => handleInputChange(e)}
                                id="firstName"
                                placeholder="First Name"
                                autoComplete='off' />
                        </div>

                        <div className="form-group mt-3">
                            <label className="mb-1">Last Name </label>
                            <input
                                type="text"
                                name=""
                                id="lastName"
                                value={lastName}
                                className="form-control"
                                onChange={(e) => handleInputChange(e)}
                                placeholder="LastName"
                                autoComplete='off' />
                        </div>
                        <div className="form-group mt-3">
                            <label className="mb-1">email</label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => handleInputChange(e)}
                                placeholder="Email"
                                autoComplete='off' />
                        </div>

                        <div className="form-group mt-3">
                            <label className="mb-1">Password</label>
                            <input
                                className="form-control"
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => handleInputChange(e)}
                                placeholder="Password"
                                autoComplete='off' />
                        </div>
                        <div className="form-group mt-3">
                            <label className="mb-1">Password</label>
                            <input
                                className="form-control"
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) =>
                                    handleInputChange(e)}
                                placeholder="Confirm Password"
                                autoComplete='off' />
                        </div>

                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>

                        <p className="forgot-password text-right mt-2">
                            <Link to="/login" className="mt-1 anchorRemove">
                                If you already have an account</Link>
                        </p>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}
export default Registration;

