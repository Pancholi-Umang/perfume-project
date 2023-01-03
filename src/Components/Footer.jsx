import React from 'react'
import Help from '../Assets/other/help.png'
import './ReactStyle.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='container mt-3'>
      <div className="row bg-warning">
        <div className="col d-flex justify-content-end">
          <img className='mt-3 mb-3 clrCss' src={Help} alt="error" />
        </div>
        <div className="col m-auto">
          <h1 className='clrCss'>Need Help ?</h1>
          <h4 className='clrCss'>Contact us</h4>
        </div>
      </div>
      <div className="row blackDarkerBg">
        <div className="col-md-6 mt-3 forFlexColumndir">
          <h4 className='clrWhites'>INFORMATION</h4>
          <small><Link to='/terms' className='clrWhite' >Terms And Conditions</Link></small>
          <small><Link to='/policy' className='clrWhite' >Privacy Policy</Link></small>
          <small><Link to='/contactus' className='clrWhite' >Contact Us</Link></small>
          <small><Link to='/about' className='clrWhite' >About Us</Link></small>
        </div>
        <div className="col-md-6 mb-4 m-auto">
          <div className="col mt-4 clrWhites xcv text-center">
            <h4>Affordable-Easy-Secured</h4>
            <h6>at our store</h6>
          </div>
          <div className="col mt-4 clrWhites xcv text-center">
            <h4>COD + Prepaid</h4>
            <h6>Two-factor authentication</h6>
          </div>
          <div className="col mt-4 clrWhites xcv text-center">
            <h4>Pan Gujrat Delivery</h4>
            <h6>270 + Pincodes</h6>
          </div>
        </div>
      </div>
      <div className="row bg-secondary d-flex justify-content-center align-item-center">
          <p className='text-center mt-2 clrWhites'>© 2023 <strong className='ylowclr'>shineperfumes.com</strong> All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer