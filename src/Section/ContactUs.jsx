import React from 'react'
import Footer from '../Components/Footer'
import './section.css'

const ContactUs = () => {
    return (<>
        <div className='container'>
            <div className="row">
                <div className="col-md-12">
                    <h1 className='text-center'>Contact Us</h1>
                </div>
                <div className="col-md-12 p-5 centerWalaText">
                    <p>+91 8690012345</p>
                    <p>shineperfumes@gmail.com</p>
                </div>
            </div>
        </div>
        <Footer />
    </>
    )
}

export default ContactUs