import * as types from "./actionType";

const initialValue = {
  cart: [],
};

const CartReducer = (state = initialValue, action) => {
  if (action.type === types.FETCH_CART_DATA) {
    return {
      ...state,
      cart: action.payload,
    };
  } else if (action.type === types.ADD_CART_DATA) {
    return {
      ...state,
      cart: action.payload,
    }
  } else if (action.type === types.REMOVE_CART_DATA) {
    return {
      ...state,
      cart: action.payload,
    }
  } else {
    return state;
  }
};

export default CartReducer;
