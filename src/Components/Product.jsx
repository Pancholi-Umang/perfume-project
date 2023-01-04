import React from 'react'
import Footer from './Footer';
import './ReactStyle.css'

const Product = ({ showProductPage, SetCart }) => {
    return (
        <>
            {showProductPage.map((value, index) => {
                const { imag, name, category, price, description } = value;
                return (

                    <div className='container' key={index}>
                        <div className="bg-warning mt-3 mb-3 row d-flex justify-content-start p-2 ">
                            <h1>{name.toUpperCase()} ({category.toUpperCase()})</h1>
                        </div>
                        <div className="row">
                            <div className="col bg-dark text-white d-flex justify-content-center myMediaClass">
                                <img src={imag} alt="error" />
                            </div>
                            <div className="col p-3 bg-dark text-white ">
                                <h5 className="card-title">{name.toUpperCase()}&nbsp;({category.toUpperCase()})</h5>
                                <strong><h1 className="card-text">₹{price}</h1></strong>
                                <hr className='mt-3' />
                                <h5 className='bg-warning w-25 text-center p-1 rounded text-dark'>Description:</h5>
                                <p>{description}</p>
                                <hr className='mt-5 m3-5' />
                                <div className='productFlexButton'> 
                                    <button className="btn btn-warning col-md-4 mb-2 mx-auto myChange text-center" onClick={() => SetCart(value)}>ADD CART</button>
                                    <button className="btn btn-success mx-auto col-md-4 myChange text-center">BUY NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
            <Footer />
        </>
    )
}

export default Product