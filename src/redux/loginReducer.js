import * as types from "./actionType";

const initialValue = {
  register: [],
  loginToggle: false,
};

const loginReducer = (state = initialValue, action) => {
  if (action.type === types.FETCH_LOGIN_DATA) {
    return {
      register: action.payload,
    };
  } else {
    return state;
  }
};

export default loginReducer;
