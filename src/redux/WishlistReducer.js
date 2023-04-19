import * as types from "./actionType";

const initialValue = {
  wishlist: [],
};

const WishlistReducer = (state = initialValue, action) => {
  if (action.type === types.FETCH_WISHLIST_DATA) {
    return {
      ...state,
      wishlist: action.payload,
    };
  } else if (action.type === types.ADD_WISHLIST_DATA) {
    return {
      ...state,
      wishlist:action.payload
      // wishlist: [...state.wishlist, action.payload],
    }
  } else if (action.type === types.REMOVE_WISHLIST_DATA) {
    return {
      ...state,
      wishlist: action.payload,
    }
  }else {
    return state;
  }
};

export default WishlistReducer;
