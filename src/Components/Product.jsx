import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import QuantityBtn from "./QuantityBtn";
import "./ReactStyle.css";
import { Link } from "react-router-dom";

const Product = () => {
  const { Productid } = useParams();

  const [valOFQuantrity, setValOfQuantity] = useState(1);
  const [urldata, setUrlData] = useState({});

  const SetCart = (val) => {
    axios({
      method: "post",
      url: "https://cart-47ea1-default-rtdb.firebaseio.com/cart.json",
      data: {
        "category": val.category,
        "description": val.description,
        "name": val.name,
        "imag": val.imag,
        "price": val.price,
        "id": val.id,
        "quantity": val.quantity
      },
    });
  };

  const baseURL = `https://shine-perfumes-default-rtdb.firebaseio.com/items/${Productid}/.json/`;
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setUrlData(response.data);
    });
  }, []);

  console.log(urldata);

  function Adds() {
    if (valOFQuantrity < 999) {
      setValOfQuantity(valOFQuantrity + 1);
    } else {
      setValOfQuantity(999);
    }
  }

  function Rems() {
    if (valOFQuantrity > 1) {
      setValOfQuantity(valOFQuantrity - 1);
    } else {
      setValOfQuantity(1);
    }
  }

  const { imag, category, name, price, description } = urldata;
  const ComplatePrice = price * valOFQuantrity;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="containes">
          <div className="item1-1"></div>
          <div className="item2-2"></div>
          <div className="item3-3"></div>
          <div className="item4-4"></div>
          <div className="item5-5"></div>
        </div>
      ) : (
        <div className="container">
          <div className=" mt-3 mb-3 row d-flex justify-content-start p-2 YellowPartCenter">
            <h1 className="onMediaWidthChange">
              {name?.toUpperCase()} ({category?.toUpperCase()})
            </h1>
          </div>
          <div className="row acjustmedia">
            <div className="col bg-dark text-white d-flex justify-content-center">
              <img src={imag} className="mediaQueryImage" alt="error" />
            </div>

            <div className="col p-3 bg-dark madeRelative text-white">
              <h5 className="card-title priceMedia">
                {name?.toUpperCase()}&nbsp;({category?.toUpperCase()})
              </h5>
              <strong>
                <h1 className="card-text priceMedia">₹{price}</h1>
              </strong>

              <div className="d-flex align-items-center justify-content-start mt-1">
                <QuantityBtn
                  valOFQuantrity={valOFQuantrity}
                  Adds={Adds}
                  Rems={Rems}
                />
              </div>

              <hr className="mt-3" />
              <h5 className="changeColor w-50 text-center p-1 rounded centerMedia text-dark">
                Description:
              </h5>
              <p className="description">{description}</p>
              <hr className="mt-5 shortDownHr" />
              <div className="productFlexButton">
                <button
                  className="btn changeColorButton linkWithCssMedia col-md-4 mb-2 mx-auto text-center"
                  onClick={() => SetCart(urldata)}
                >
                  ADD CART
                </button>
                <Link
                  className="btn changeColorButtondiffrent linkWithCssMedia mx-auto mb-2 col-md-4 text-center"
                  to={`/paymentgetway/${name}/${ComplatePrice}`}
                >
                  PAY ₹{ComplatePrice}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Product;
