import React from 'react'
import { Link } from 'react-router-dom'
import './ReactStyle.css'

function Header({size}) {
    function myFunction() {
        // document.getElementById("myCheck").click();
      }
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mt-3 mb-3">
                <div className="container-fluid">
                    <Link className="navbar-brand thatsBrandName col-md-4 text-uppercase" to='/' >Shine Perfumes</Link>
                    <button className="navbar-toggler" id='myCheck' type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto col-md-12 d-flex justify-content-end mb-2 mb-lg-0 NavbarInnerUl">
                            <li className="nav-item">
                                <Link className="nav-link navbar-dark" to='/' onClick={myFunction}  aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navbar-dark" to='/category' onClick={myFunction}  aria-current="page">Category</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navbar-dark" to='/allproduct' onClick={myFunction} aria-current="page">All Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navbar-dark" to='/login' onClick={myFunction} aria-current="page">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navbar-dark relPos" onClick={myFunction} to='/cart' aria-current="page"><i className="fa fa-shopping-cart fa-lg underbase" aria-hidden="true"></i><span className='CartSetting'>{size}</span></Link>
                                <Link className="nav-link navbar-dark AddCartButtonToggle" onClick={myFunction} to='/cart' aria-current="page">Cart Item <span className='setThis'>- {size}</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header