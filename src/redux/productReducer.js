import * as types from "./actionType";

const initialState = {
  products: [],
  product: {},
  filter: [],
  category:[],
  loading: true,
};

const productReducer = (state = initialState, action) => {
  if (action.type === types.FETCH_ALL_PRODUCT) {
    return {
      ...state,
      products: action.payload,
      loading:false
    }
  }else if(action.type === types.FILTER_DATA) {
    return{
      ...state,
      filter:action.payload,
      loading:false
    }
  }else if(action.type === types.CATEGORY_DATA) {
    return{
      ...state,
      category:action.payload,
      loading:false
    }
  }else {
    return state;
  }
};

export default productReducer;
