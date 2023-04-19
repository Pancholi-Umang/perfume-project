import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import RootReducer from "./RootReducer";

const middlewares = [ReduxThunk];


// here don't use ({}) here only use paranthases()
const store = createStore(
    RootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
)

export default store