import React from "react";
import { Link } from "react-router-dom";
import "./ReactStyle.css";

const Footer2 = () => {
  return (
    <>
      <footer className="section bg-footer mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="">
                <h6 className="footer-heading text-uppercase text-white">
                  Information
                </h6>
                <ul className="list-unstyled footer-link mt-4">
                  <li>
                    <Link to="/">Pages</Link>
                  </li>
                  <li>
                    <Link to="/allproduct">Shop</Link>
                  </li>
                  <li>
                    <Link to="/category">Category</Link>
                  </li>
                  <li>
                    <Link to="/cart">Cart</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="">
                <h6 className="footer-heading text-uppercase text-white">
                  Ressources
                </h6>
                <ul className="list-unstyled footer-link mt-4">
                  <li>
                    <Link>Monitoring Grader</Link>
                  </li>
                  <li>
                    <Link>Video Tutorial</Link>
                  </li>
                  <li>
                    <Link to="/terms">Terms And Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-sm-6">
              <div className="">
                <h6 className="footer-heading text-uppercase text-white">
                  Help
                </h6>
                <ul className="list-unstyled footer-link mt-4">
                  <li>
                    <Link to="/reg">Sign Up </Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/terms">Terms of Services</Link>
                  </li>
                  <li>
                    <Link to="/policy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 ">
              <div className="">
                <h6 className="footer-heading text-uppercase text-white">
                  Contact Us
                </h6>
                <p className="contact-info mt-4">
                  Contact us if need help withanything
                </p>
                <p className="contact-info">+91 8690012345</p>
                <div className="mt-5">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <Link to="/">
                        <i
                          className="fa fa-instagram fa-lg text-secondary coding"
                          aria-hidden="true"
                        ></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="/">
                        <i
                          className="fa fa-facebook fa-lg text-secondary coding"
                          aria-hidden="true"
                        ></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="/">
                        <i
                          className="fa fa-google fa-lg text-secondary coding"
                          aria-hidden="true"
                        ></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="/">
                        <i
                          className="fa fa-apple fa-lg text-secondary coding"
                          aria-hidden="true"
                        ></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <p className="footer-alt mb-0 f-14">
              © Copyright 2023, shineperfumes. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer2;
