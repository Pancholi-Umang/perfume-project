import React, { useState, useEffect } from "react";
import "./ReactStyle.css";
import Footer from "./Footer";
import axios from "axios";
import { Link } from "react-router-dom";

const AddCart = ({ onPaymentGetwayUsingCart }) => {
  const [addToCart, setAddToCart] = useState([]);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const deleteItems = (index) => {
    const DeleteCardData = axios.delete(
      `https://cart-47ea1-default-rtdb.firebaseio.com/cart/${index}.json`
    );
    setAddToCart(DeleteCardData);
  };

  const emptyCart = () => {
    const DeleteAllCardData = axios.delete(
      `https://cart-47ea1-default-rtdb.firebaseio.com/cart.json`
    );
    setAddToCart(DeleteAllCardData);
  };

  const baseURL = `https://cart-47ea1-default-rtdb.firebaseio.com/cart.json`;
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setAddToCart(response.data);
    });
  }, [deleteItems, emptyCart]);

  function plusing(id) {
    //   addToCart.map((curElem)=>{
    //     if(curElem.id === id){
    //       if(curElem.quantity < 999){
    //         return {...addToCart , quantity: curElem.quantity + 1}
    //       }
    //       else{
    //         return {...addToCart , quantity: Number(999)}
    //       }
    //     }
    //   })
  }

  function minusing(id) {
    //   addToCart.map((curElem)=>{
    //     if(curElem.id === id){
    //       if(curElem.quantity > 1){
    //         return {...addToCart , quantity: curElem.quantity + 1}
    //       }
    //       else{
    //         return {...addToCart , quantity: Number(1)}
    //       }
    //     }
    //   })
  }
  var arr = [];
  for (let key in addToCart) {
    arr.push(Object.assign(addToCart[key], { id: key }));
  }

  let cartTotal = 0;
  let prices = 0;
  let total = [];
  return (
    <div className="container">
      {loading ? (
        <div className="containes">
          <div className="item1-1"></div>
          <div className="item2-2"></div>
          <div className="item3-3"></div>
          <div className="item4-4"></div>
          <div className="item5-5"></div>
        </div>
      ) : (
        <>
          <section className="h-100 " style={{ backgroundColor: "#eee" }}>
            <div className="container py-5 h-100">
              <div className="row justify-content-center align-items-center h-100">
                <div className="col-md-10">
                  <div className="d-flex MakeMediaCssUsingHeaderCart justify-content-between align-items-center mb-1">
                    <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>

                    <div className="makeMenuButtonWithMedia">
                      <p className="mb-0">
                        <button
                          onClick={emptyCart}
                          className="btn btn-secondary"
                        >
                          Empty Cart
                        </button>
                      </p>
                    </div>
                  </div>
                  <span className=" UseCenter">
                    (<strong>{arr?.length}</strong> item in your cart)
                  </span>
                  <hr />

                  {arr?.map((value, index) => {
                    const { id, imag, name, price, category } = value;
                    return (
                      <div
                        className="card rounded-3 mb-4 onMediaCardCss"
                        key={index}
                      >
                        <div className="card-body p-4">
                          <div className="row justify-content-between align-items-center">
                            <div className="col-md-2 col-lg-2 col-xl-2">
                              <img
                                className="container-fluid card-img rounded-3"
                                src={imag}
                                alt="Card image cap"
                              />
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2">
                              <p className="lead fw-normal mb-2">
                                <strong className="SetFontsizeMedia">
                                  {name?.toUpperCase()}
                                </strong>
                              </p>
                              <p className="SetFontsizeMedia">
                                {category?.toUpperCase()}
                              </p>
                            </div>
                            <div className="col-md-2 col-lg-2 OnmediaWidthSmall col-xl-2 d-flex align-items-center justify-content-around ">
                              <button
                                type="submit"
                                className="px-2 btn xcv madeBtn"
                                onClick={() => minusing(id)}
                              >
                                -
                              </button>
                              <input
                                className=" text-center GiveOnMargin RemoveSpinner no-drop form-control input-sm"
                                type="number"
                                // value={quantity}
                                value={1}
                                disabled
                              />
                              <button
                                className="px-2 btn xcv madeBtn"
                                onClick={() => plusing(id)}
                              >
                                +
                              </button>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 offset-lg-1">
                              <h5 className="onMediMargin onMediaPrice">
                                <strong> ₹{price} </strong>
                              </h5>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 ">
                              <div className="stringing h-50 ">
                                <i
                                  className="fa fa-trash-o fa-2x makePointer btn btn-danger"
                                  onClick={() => deleteItems(id)}
                                ></i>
                              </div>
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

          {arr?.map((data) => {
            prices = Number(data.price);
            total.push(prices);
            cartTotal += prices;
          }, [])}

          <hr />
          <div className="row">
            <div className="col-md-6 text-center">
              <h3>Total Amount :₹{cartTotal}</h3>
            </div>
            <div className="col-md-6 text-center">
              <Link
                className="btn btn-primary col-md-4"
                to="/paymentgetway"
                onClick={() => onPaymentGetwayUsingCart()}
              >
                PAY NOW
              </Link>
            </div>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default AddCart;
