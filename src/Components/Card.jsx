import React, { useState } from "react";
import "./ReactStyle.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { savedataOnCart, savedataOnWishlist } from "../redux/action";

function Card({ value }) {
  const { imag, name, category, price, id, status, is_wishlist } = value;
  const [toggling, setToggling] = useState(status);
  const [changelist, setChangeList] = useState(is_wishlist);

  const dispatch = useDispatch();
  const SetCart = (val) => {
    console.log(val)
    axios.post(`https://addtocart-2eccb-default-rtdb.firebaseio.com/cart.json`, val)
    .then(() => {
      dispatch(savedataOnCart(val));
    });
    setToggling(true);
  };

  const addWishlist = (val) => {
    axios.post(`https://wishlist-466aa-default-rtdb.firebaseio.com/wish.json`, val)
      .then(() => {
        dispatch(savedataOnWishlist(val));
      });
    setChangeList(true);
  };

  return (
    <>
      <div className=" mt-2 mx-1 col-md-3 myData p-1 card">
        <img className="img myCardImage" src={imag} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title categoryPrice text-center">
            <div>
              {changelist === "false" ? (
                <button
                  className="bg-transparent border-0 mb-1"
                  onClick={() => addWishlist(value)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                </button>
              ) : (
                <Link
                  className="bg-transparent border-0 mb-1"
                  to="/is_wishlist"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-heart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                    />
                  </svg>
                </Link>
              )}
            </div>
            {name.toUpperCase()}
            <br />({category})
          </h5>
          <p className="card-text categoryPrice text-center">
            <strong>₹{price}</strong>
          </p>
          <p className="card-text btnAround d-flex justify-content-around p-1">
            {toggling === "false" ? (
              <button
                className="btn clor myChange"
                onClick={() => SetCart(value)}
              >
                ADD CART
              </button>
            ) : (
              <Link className="btn clor myChange" to="/cart">
                Go to cart
              </Link>
            )}

            <Link
              className="btn changeColorButton myChange"
              to={`/product/${name}/${id}`}
            >
              BUY NOW
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
