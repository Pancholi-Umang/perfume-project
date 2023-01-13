import React from "react";
import './ReactStyle.css'
import Footer from './Footer';

const AddCart = ({ addToCart, deleteItems, size, emptyCart,valueQuantity,plusing,minusing }) => {
    let cartTotal = 0;
    let prices = 0;
    let total = [];
    return (
        <div>
            <section className="h-100" style={{ backgroundColor: "#eee" }}>
                <div className="container py-5 h-100">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-md-10">
                            <div className="d-flex MakeMediaCssUsingHeaderCart justify-content-between align-items-center mb-1">
                                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>

                                <div className="makeMenuButtonWithMedia">
                                    <p className="mb-0">
                                        <button onClick={emptyCart} className="btn btn-secondary">
                                            Empty Cart
                                        </button>
                                    </p>
                                </div>
                            </div>
                            <span className=" UseCenter">(<strong>{size}</strong> item in your cart)</span>
                            <hr />
                            {addToCart.map((value, index) => {
                                const { id, imag, name, price, category} = value;
                                return (
                                    <div className="card rounded-3 mb-4 onMediaCardCss" key={index}>
                                        <div className="card-body p-4">
                                            <div className="row justify-content-between align-items-center">
                                                <div className="col-md-2 col-lg-2 col-xl-2">
                                                    <img className="container-fluid card-img rounded-3" src={imag} alt="Card image cap" />

                                                </div>
                                                <div className="col-md-2 col-lg-2 col-xl-2">
                                                    <p className="lead fw-normal mb-2"><strong className="SetFontsizeMedia">{name.toUpperCase()}</strong></p>
                                                    <p className="SetFontsizeMedia">{category.toUpperCase()}</p>
                                                </div>
                                                <div className="col-md-2 col-lg-2 OnmediaWidthSmall col-xl-2 d-flex align-items-center justify-content-around ">
                                                    <button className="px-2 btn xcv madeBtn" onClick={minusing}>-</button>
                                                    <input
                                                        className=" text-center GiveOnMargin RemoveSpinner no-drop form-control input-sm"
                                                        type="number"
                                                        value={valueQuantity}
                                                        disabled
                                                        // onChange={} aano use karishu tyare j text box thi change thase atle tene use karvi nai
                                                    />
                                                    <button className="px-2 btn xcv madeBtn" onClick={plusing}>+</button>
                                                </div>
                                                <div className="col-md-2 col-lg-2 col-xl-2 offset-lg-1">
                                                    <h5 className="onMediMargin onMediaPrice"><strong>₹{price}</strong></h5>
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


