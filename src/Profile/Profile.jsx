import React, { useState, useEffect } from "react";
import "./profile.css";
import { useNavigate } from "react-router-dom";

const LocalStorageLogin = () => {
  let list = localStorage.getItem("LoginDetails");

  if (list) {
    return JSON.parse(localStorage.getItem("LoginDetails"));
  } else {
    return [];
  }
};

const Profile = () => {
  const [LoginUser, setLoginUser] = useState(LocalStorageLogin());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);


  const navigate = useNavigate();

  const emptyLogin = () => {
    setLoginUser([]);
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  useEffect(() => {
    localStorage.setItem("LoginDetails", JSON.stringify(LoginUser));
  }, [LoginUser]);

  return (
    <section className="mh-100">
      {loading ? (
        <div className="containes">
          <div className="item1-1"></div>
          <div className="item2-2"></div>
          <div className="item3-3"></div>
          <div className="item4-4"></div>
          <div className="item5-5"></div>
        </div>
      ) : (
        <div className="container py-5 mt-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="card mb-3 radioss">
                <div className=" row g-0">
                  <div className="col-md-4 gradient-custom text-center text-white">
                    <img
                      src="https://t4.ftcdn.net/jpg/02/29/75/83/240_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
                      alt="Avatar"
                      className="card-img container-fluid my-3 stylingprofile"
                    />
                    <h5 className="card-title">
                      {LoginUser?.data?.firstName} {LoginUser?.data?.lastName}
                    </h5>
                    <p className="card-text">USER</p>
                  </div>

                  <div className="col-md-8">
                    <div className="p-4 card-body">
                      <h6>Information</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>First Name</h6>
                          <p className="card-text text-muted">
                            {LoginUser?.data?.firstName}
                          </p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Last Name</h6>
                          <p className="text-muted card-text">
                            {LoginUser?.data?.lastName}
                          </p>
                        </div>
                      </div>

                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Email</h6>
                          <p className="text-muted card-text">
                            {LoginUser.data?.email}
                          </p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Log-out</h6>
                          <p className="text-muted card-text">
                            <button
                              className="btn-xs btn-text border-0 bg-transparent"
                              onClick={() => emptyLogin()}
                            >
                              Log-out --
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Profile;
