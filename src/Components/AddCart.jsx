import React, { useState } from 'react'
import Footer from './Footer';
import './ReactStyle.css'

const AddCart = ({ addToCart, deleteItems, size, emptyCart }) => {
    
    let cartTotal = 0;
    let prices = 0;
    let total = []; 
    return (
        <>
            <div className="col-md-12">
                <h1>Shopping Cart</h1>
                <div className="col-md-12 flexContainer">
                <span>(<strong>{size}</strong> item in your cart)</span>
                <button onClick={emptyCart} className='btn btn-secondary'>Empty Cart</button>
                </div>
                
            </div>
            <hr />
            <div className='row d-flex justify-content-around mt-2 px-2'>
                {addToCart.map((value, index) => {
                    const { id, imag, name, price } = value;
                    return (
                        <div className="container text-center mt-1 xcv" key={index}>
                            <div className="row AlignCneter madeUpCartHeight">
                                <div className="col-12 InCartInnerItem">
                                    <img className=" img setImageAtCart col-4" src={imag} alt="Card image cap" />
                                    <div className="titleFlex col-3">
                                        <div className='stringing h-50 '><strong>Name:</strong></div>
                                        <div className='stringing h-50 '>{name.toUpperCase()}</div>
                                    </div>
                                    <div className="titleFlex col-2">
                                        <div className='stringing h-50 '><strong>Price:</strong></div>
                                        <div className='stringing h-50 '>{price}₹</div>
                                    </div>
                                    <div className="BtnFlex col-3">
                                        <div className='stringing h-50 '><button className='btn btn-success w-75 innerBtnCss'>BUY</button></div>
                                        <div className='stringing h-50 '><button className='btn btn-danger w-75 innerBtnCss' onClick={() => deleteItems(id)} >REMOVE</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            {
                addToCart.map((data) => {
                    prices = Number(data.price);
                    total.push(prices)
                    cartTotal += prices;

                },[])
            }

            <hr />
            <div className="row">
                <div className="col-md-6 text-center">
                    <h3>Total Amount : {cartTotal}₹</h3>
                </div>
                <div className="col-md-6 text-center">
                    <button className='btn btn-primary col-md-4'>Pay Now</button>
                </div>
            </div>
        <Footer />
        </>
    )
}

export default AddCart