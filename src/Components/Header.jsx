import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./ReactStyle.css";
import { useDispatch, useSelector } from "react-redux";
import { FetchCartData, getRegistration } from "../redux/action";

const LocalStorageLogin = () => {
  let list = localStorage.getItem("LoginDetails");
  if (list) {
    return JSON.parse(localStorage.getItem("LoginDetails"));
  } else {
    return [];
  }
};

function Header() {
  const [toggleLogin, setToggleLogin] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const Cartdata = useSelector((state) => state?.cartItem?.cart);

  var arrLength = [];
  for (let key in Cartdata) {
    arrLength?.push(Object?.assign(Cartdata[key], { id: key }));
  }

  useEffect(() => {
    dispatch(FetchCartData());
    dispatch(getRegistration());
  }, []);

  const myFunction = () => {
    if (
      window?.getComputedStyle(document?.getElementById("myCheck"))?.display !==
      "none"
    ) {
      document?.getElementById("myCheck").click();
    }
  };

  // <----- this method use to toggle the login and profile in header ----->
            // console.log(localStorage?.LoginDetails.length)

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light mt-3 mb-3">
        <div className="container-fluid">
          <Link
            className="navbar-brand thatsBrandName col-md-4 text-uppercase"
            to="/"
          >
            Shine Perfumes
          </Link>
          <button
            className="navbar-toggler"
            id="myCheck"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto col-md-12 d-flex justify-content-end mb-2 mb-lg-0 NavbarInnerUl">
              <li className="nav-item">
                <Link
                  className="nav-link navbar-dark"
                  to="/"
                  onClick={myFunction}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link navbar-dark"
                  to="/category"
                  onClick={myFunction}
                  aria-current="page"
                >
                  Category
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link navbar-dark"
                  to="/allproduct"
                  onClick={myFunction}
                  aria-current="page"
                >
                  All Product
                </Link>
              </li>
              {localStorage?.LoginDetails.length == 2 ? (
                <li className="nav-item">
                  <Link
                    className="nav-link navbar-dark"
                    to="/login"
                    onClick={myFunction}
                    aria-current="page"
                  >
                    Login
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <Link
                    className="nav-link navbar-dark"
                    to="/profile"
                    onClick={myFunction}
                    aria-current="page"
                  >
                    Profile
                  </Link>
                </li>
              )}

              <li className="nav-item">
                <Link
                  className="nav-link navbar-dark relPos"
                  onClick={myFunction}
                  to="/cart"
                  aria-current="page"
                >
                  <i
                    className="fa fa-shopping-cart fa-lg underbase"
                    aria-hidden="true"
                  ></i>
                  <span className="CartSetting">{arrLength?.length}</span>
                </Link>

                <Link
                  className="nav-link navbar-dark AddCartButtonToggle"
                  onClick={myFunction}
                  to="/cart"
                  aria-current="page"
                >
                  Cart Item
                  <span className="setThis"> - {arrLength?.length}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
