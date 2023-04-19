import * as types from "./actionType";

const initialValue = {
  invoice: [],
};

const invoiceReducer = (state=initialValue, action) => {
  if(action.type === types.FETCH_INVOICE_DATA){
    return{
      ...state,
      invoice:action.payload
    }
  }else{
    return state
  }
}

export default invoiceReducer