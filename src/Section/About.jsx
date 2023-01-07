import React from 'react'
import Footer from '../Components/Footer'
import './section.css'

function About() {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12">
          <h1 className='text-center'>About Us</h1>
        </div>
        <div className="col-md-12 p-5 centerWalaText">
          SHINE PERFUMES is aggressively growing in India since 1988. For over almost three decades, we have built a solid foundation of pioneering and creating some of the best and most exclusive fragrances, which have established a nationwide reputation for quality, luxury and elegance.
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About