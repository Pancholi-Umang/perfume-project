import React from 'react'
import './profile.css'
const Profile = () => {
  return (
    <section className="mh-100">
      <div className="container py-5 mt-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="card mb-3 radioss">
              <div className=" row g-0">
                <div className="col-md-4 gradient-custom text-center text-white">
                  <img src="https://t4.ftcdn.net/jpg/02/29/75/83/240_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
                    alt="Avatar" className="card-img container-fluid my-3 stylingprofile" />
                  <h5 className='card-title'>Umang Pancholi</h5>
                  <p className='card-text'>USER</p>
                </div>

                <div className='col-md-8'>
                  <div className="p-4 card-body">
                    <h6>Information</h6>
                    <hr className="mt-0 mb-4" />
                    <div className="row pt-1">
                      <div className="col-6 mb-3">
                        <h6>First Name</h6>
                        <p className="card-text text-muted">Umang</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>Last Name</h6>
                        <p className="text-muted card-text">Pancholi</p>
                      </div>
                    </div>

                    <div className="row pt-1">
                      <div className="col-6 mb-3">
                        <h6>Email</h6>
                        <p className="text-muted card-text">umang@gmail.com</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>Phone No</h6>
                        <p className="text-muted card-text">123456789</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile