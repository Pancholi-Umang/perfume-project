import React from "react";
import './ReactStyle.css'
import Footer from './Footer';

const AddCart = ({ addToCart, deleteItems, size, emptyCart }) => {
    let cartTotal = 0;
    let prices = 0;
    let total = [];
    return (
        <div>
            <section className="h-100" style={{ backgroundColor: "#eee" }}>
                <div className="container py-5 h-100">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-md-10">
                            <div className="d-flex justify-content-between align-items-center mb-1">
                                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>

                                <div>
                                    <p className="mb-0">
                                        <button onClick={emptyCart} className="btn btn-secondary">
                                            Empty Cart
                                        </button>
                                    </p>
                                </div>
                            </div>
                            <span className="mt-0 mb-0">(<strong>{size}</strong> item in your cart)</span>
                            <hr />
                            {addToCart.map((value, index) => {
                                const { id, imag, name, price, category } = value;
                                return (
                                    <div className="card rounded-3 mb-4 onMediaCardCss" key={index}>
                                        <div className="card-body p-4">
                                            <div className="row justify-content-between align-items-center">
                                                <div className="col-md-2 col-lg-2 col-xl-2">
                                                    <img className=" card-img rounded-3" fluid src={imag} alt="Card image cap" />

                                                </div>
                                                <div className="col-md-2 col-lg-2 col-xl-2">
                                                    <p className="lead fw-normal mb-2"><strong>{name.toUpperCase()}</strong></p>
                                                    <p>{category.toUpperCase()}</p>
                                                </div>
                                                <div className="col-md-2 col-lg-2 col-xl-2 d-flex align-items-center justify-content-around">
                                                    <button className="px-2 btn">+</button>
                                                    <input
                                                        className="text-center RemoveSpinner form-control input-sm"
                                                        type="number"
                                                    />

                                                    <button className="px-2 btn">-</button>
                                                </div>
                                                <div className="col-md-2 col-lg-2 col-xl-2 offset-lg-1">
                                                    <h5 className="onMediMargin"><strong>₹{price}</strong></h5>
                                                </div>
                                                <div className="col-md-2 col-lg-2 col-xl-2 ">
                                                    <div className='stringing h-50 '><i className="fa fa-trash-o fa-2x makePointer btn btn-danger" onClick={() => deleteItems(id)}></i></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
            {
                addToCart.map((data) => {
                    prices = Number(data.price);
                    total.push(prices)
                    cartTotal += prices;

                }, [])
            }
            <hr />
            <div className="row">
                <div className="col-md-6 text-center">
                    <h3>Total Amount :₹{cartTotal}</h3>
                </div>
                <div className="col-md-6 text-center">
                    <button className='btn btn-primary col-md-4'>Pay Now</button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AddCart;


