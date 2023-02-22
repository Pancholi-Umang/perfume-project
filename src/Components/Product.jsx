import React from 'react'
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import QuantityBtn from './QuantityBtn';
import './ReactStyle.css'
import { Link } from 'react-router-dom';

const Product = ({ showProductPage, SetCart, valueQuantity, plusing, minusing, ShowPriceDetails }) => {

    const { Productname } = useParams();
    console.log(Productname);

    const { imag, category, name, price, description } = showProductPage;
    const ComplatePrice = price * valueQuantity;

    return (
        <>  
            <div className='container'>
                <div className=" mt-3 mb-3 row d-flex justify-content-start p-2 YellowPartCenter">
                    <h1 className='onMediaWidthChange'>{name.toUpperCase()} ({category.toUpperCase()})</h1>
                </div>
                <div className="row acjustmedia">

                    <div className="col bg-dark text-white d-flex justify-content-center">
                        <img src={imag} className="mediaQueryImage" alt="error" />
                    </div>

                    <div className="col p-3 bg-dark madeRelative text-white">
                        <h5 className="card-title priceMedia">{name.toUpperCase()}&nbsp;({category.toUpperCase()})</h5>
                        <strong><h1 className="card-text priceMedia">₹{price}</h1></strong>

                        <div className="d-flex align-items-center justify-content-start mt-1">
                            <QuantityBtn 
                                valueQuantity={valueQuantity}
                                plusing={plusing}
                                minusing={minusing} 
                            />
                        </div>

                        <hr className='mt-3' />
                        <h5 className='changeColor w-50 text-center p-1 rounded centerMedia text-dark'>Description:</h5>
                        <p className='description'>{description}</p>
                        <hr className='mt-5 shortDownHr' />
                        <div className='productFlexButton'>
                            <button className="btn changeColorButton linkWithCssMedia col-md-4 mb-2 mx-auto text-center" onClick={() => SetCart(showProductPage)}>ADD CART</button>
                            <Link className="btn changeColorButtondiffrent linkWithCssMedia mx-auto mb-2 col-md-4 text-center" to="/paymentgetway" onClick={() => ShowPriceDetails(ComplatePrice,showProductPage)}>PAY {ComplatePrice}</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Product