import React, { useState, useEffect } from "react";
import "./ReactStyle.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Footer2 from "./Footer2";
import { useDispatch, useSelector } from "react-redux";
import { FetchCartData, removeCartData, getAllPerfume } from "../redux/action";

const AddCart = () => {
  const [buttonQuantity, setButtonQuantity] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  }, []);
  
  const [btnLoader, setButtonLoader] = useState(false);
  useEffect(() => {
    setButtonLoader(true);
    setTimeout(() => {
      setButtonLoader(false);
    }, 1000);
  }, [buttonQuantity]);
  
  const GiveData = (num) => {
    let Numbers = Number(num);
    axios.patch(
      `https://listofallperfumes-default-rtdb.firebaseio.com/items/${Numbers}.json`,
      {
        status: "false",
      }
      ).then(()=>dispatch(getAllPerfume()));
    };
    
    const Cartdata = useSelector(state=> state.cartItem.cart)

  useEffect(() => {
    dispatch(FetchCartData())
  }, []);

  var cartArray = [];
  for (let key in Cartdata) {
    cartArray.push(Object.assign(Cartdata[key], { id: key }));
  }

  function plusing(id, qty) {
    setButtonQuantity(qty);
    if (buttonQuantity < 99) {
      axios.patch(
        `https://addtocart-2eccb-default-rtdb.firebaseio.com/cart/${id}.json`,
        {
          quantity: qty,
        }
      );
    } else {
      setButtonQuantity(Number(99));
    }
  }

  function minusing(id, qty) {
    setButtonQuantity(qty);
    if (buttonQuantity > 1) {
      axios.patch(
        `https://addtocart-2eccb-default-rtdb.firebaseio.com/cart/${id}.json`,
        {
          quantity: qty,
        }
      );
    } else {
      setButtonQuantity(Number(1));
    }
  }


  const deleteItems = (value) => {
    let number = "";
    axios.get(`https://addtocart-2eccb-default-rtdb.firebaseio.com/cart/${value.id}/id.json`)
      .then((response) => {
        number = response.data;
      });
    const DeleteCardData = axios.delete(
      `https://addtocart-2eccb-default-rtdb.firebaseio.com/cart/${value.id}.json`
    );
    DeleteCardData?.then(() => {
      const cartGiveValue = cartArray?.filter((cartvalue)=>{
        return cartvalue.id != value.id
      })
      GiveData(number);
      dispatch(removeCartData(cartGiveValue))
      dispatch(FetchCartData())
    });
    const NavigateManage = cartArray.length - Number(1)
    if(NavigateManage == 0){
      setTimeout(() => navigate("/"), 1000);
    }
  };

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
                      <p className="mb-0"></p>
                    </div>
                  </div>
                  <span className=" UseCenter">
                    (<strong>{cartArray?.length}</strong> item in your cart)
                  </span>
                  <hr />

                  {cartArray?.map((value, index) => {
                    const { id, imag, name, price, category, quantity } = value;
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
                                className="px-2 btn madeBtn"
                                onClick={() => minusing(id, quantity - 1)}
                              >
                                -
                              </button>

                              {btnLoader ? (
                                <div className="btnsloader"></div>
                              ) : (
                                <input
                                  className=" text-center GiveOnMargin RemoveSpinner no-drop form-control input-sm"
                                  type="number"
                                  value={quantity}
                                  disabled
                                />
                              )}

                              <button
                                className="px-2 btn madeBtn"
                                onClick={() => plusing(id, quantity + 1)}
                              >
                                +
                              </button>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 offset-lg-1">
                              <h5 className="onMediMargin onMediaPrice">
                                <strong> ₹{price * quantity} </strong>
                              </h5>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 ">
                              <div className="stringing h-50 ">
                                <i
                                  className="fa fa-trash-o fa-2x makePointer btn btn-danger"
                                  onClick={() => deleteItems(value)}
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

          {cartArray?.map((data) => {
            prices = Number(data.price * data.quantity);
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
                to={`/cartgetway/${cartTotal}`}
              >
                Place order
              </Link>
            </div>
          </div>
        </>
      )}
      <Footer2 />
    </div>
  );
};

export default AddCart;
