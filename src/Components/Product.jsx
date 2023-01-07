import React from 'react'
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import QuantityBtn from './QuantityBtn';
import './ReactStyle.css'

const Product = ({ showProductPage, SetCart }) => {

    const { Productname } = useParams()
    console.log(Productname);

    const { imag, category, name, price, description } = showProductPage;
    return (
        <>
            <div className='container'>
                <div className="bg-warning mt-3 mb-3 row d-flex justify-content-start p-2 YellowPartCenter">
                    <h1>{name.toUpperCase()} ({category.toUpperCase()})</h1>
                </div>
                <div className="row acjustmedia">
                
                    <div className="col bg-dark text-white d-flex justify-content-center">
                        <img src={imag} className="mediaQueryImage" alt="error" />
                    </div>

                    <div className="col p-3 bg-dark madeRelative text-white">
                        <h5 className="card-title">{name.toUpperCase()}&nbsp;({category.toUpperCase()})</h5>
                        <strong><h1 className="card-text">₹{price}</h1></strong>

                        <div className="d-flex align-items-center justify-content-start mt-1">
                            {/* <QuantityBtn /> */}
                        </div>

                        <hr className='mt-3' />
                        <h5 className='bg-warning w-50 text-center p-1 rounded centerMedia text-dark'>Description:</h5>
                        <p>{description}</p>
                        <hr className='mt-5 shortDownHr' />
                        <div className='productFlexButton'>
                            <button className="btn btn-warning col-md-4 mb-2 mx-auto text-center" onClick={() => SetCart(showProductPage)}>ADD CART</button>
                            <button className="btn btn-success mx-auto mb-2 col-md-4 text-center">PAY NOW</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Product