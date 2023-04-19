import axios from "axios";
import * as types from "./actionType";

// Product Details......

export const getAllPerfume = () => {
  return function (dispatch) {
    axios
      ?.get("https://listofallperfumes-default-rtdb.firebaseio.com/items.json")
      ?.then((res) => {
        dispatch({
          type: types?.FETCH_ALL_PRODUCT,
          payload: res?.data,
        });
      });
  };
};

export const filterData = (serchvalue) => {
  return function (dispatch) {
    dispatch({
      type: types?.FILTER_DATA,
      payload: serchvalue,
    });
  };
};

export const categoryFetch = (categoryFilter) => {
  return function (dispatch) {
    dispatch({
      type: types?.CATEGORY_DATA,
      payload: categoryFilter,
    });
  };
};

// Add to Cart.......

export const FetchCartData = () => {
  return function (dispatch) {
    axios
      ?.get(`https://addtocart-2eccb-default-rtdb.firebaseio.com/cart.json`)
      .then((res) => {
        dispatch({
          type: types?.FETCH_CART_DATA,
          payload: res.data,
        });
      });
  };
};

export const savedataOnCart = (sendToCart) => {
  return function (dispatch) {
    axios
      .patch(
        `https://listofallperfumes-default-rtdb.firebaseio.com/items/${sendToCart.id}.json`,
        {
          status: "true",
        }
      )
      .then(() => {
        axios
          ?.get(`https://addtocart-2eccb-default-rtdb.firebaseio.com/cart.json`)
          .then((res) => {
            dispatch({
              type: types?.ADD_CART_DATA,
              payload: res.data,
            });
          });
        dispatch(getAllPerfume());
      });
  };
};

export const removeCartData = (filterRemove) => {
  return function (dispatch) {
    dispatch({
      type: types?.REMOVE_CART_DATA,
      payload: filterRemove,
    });
    dispatch(getAllPerfume());
  };
};

// Add to wishlist.......

export const FetchWishlistData = () => {
  return function (dispatch) {
    axios
      ?.get(`https://wishlist-466aa-default-rtdb.firebaseio.com/wish.json`)
      .then((res) => {
        dispatch({
          type: types?.FETCH_WISHLIST_DATA,
          payload: res?.data,
        });
      });
  };
};

export const savedataOnWishlist = (sendTowishlist) => {
  return function (dispatch) {
    axios
      .patch(
        `https://listofallperfumes-default-rtdb.firebaseio.com/items/${sendTowishlist.id}.json`,
        {
          is_wishlist: "true",
        }
      )
      .then(() => {
        axios
          ?.get(`https://wishlist-466aa-default-rtdb.firebaseio.com/wish.json`)
          .then((res) => {
            dispatch({
              type: types?.ADD_WISHLIST_DATA,
              payload: res.data,
            });
          });
        dispatch(getAllPerfume());
      });
  };
};

export const removeWishListData = (removeWish) => {
  return function (dispatch) {
    dispatch({
      type: types?.REMOVE_WISHLIST_DATA,
      payload: removeWish,
    });
    dispatch(getAllPerfume());
  };
};

// Get invoice details.....

export const getInvoiceDetails = () => {
  return function (dispatch) {
    axios
      ?.get(
        "https://order-invoice-c8bed-default-rtdb.firebaseio.com/invoice.json"
      )
      ?.then((res) => {
        dispatch({
          type: types?.FETCH_INVOICE_DATA,
          payload: res?.data,
        });
      });
  };
};

// Get invoice details.....

export const getRegistration = () => {
  return function (dispatch) {
    axios?.get(
        "https://registration-login-23503-default-rtdb.firebaseio.com/login.json"
      )
      ?.then((res) => {
        dispatch({
          type: types?.FETCH_LOGIN_DATA,
          payload: res?.data,
        });
      });
  };
};

