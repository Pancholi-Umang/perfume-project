import React from 'react'
import { Link } from 'react-router-dom'
import './ReactStyle.css'

function Header({size}) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mt-3 mb-3">
                <div className="container-fluid">
                    <Link className="navbar-brand thatsBrandName col-md-4 text-uppercase" to='/' >Shine Perfumes</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto col-md-12 d-flex justify-content-end mb-2 mb-lg-0 NavbarInnerUl">
                            <li className="nav-item">
                                <Link className="nav-link navbar-dark" to='/' aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navbar-dark" to='/category' aria-current="page">Category</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navbar-dark" to='/allproduct' aria-current="page">All Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navbar-dark" to='/login' aria-current="page">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navbar-dark" to='/about' aria-current="page">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navbar-dark relPos" to='/cart' aria-current="page"><i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i><span className='CartSetting'>{size}</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header