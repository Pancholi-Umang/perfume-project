import { combineReducers } from "redux";
import productReducer from "./productReducer";
import CartReducer from "./CartReducer";
import WishlistReducer from "./WishlistReducer";
import invoiceReducer from "./invoiceReducer";
import loginReducer from "./loginReducer";

const RootReducer = combineReducers({
    item:productReducer,
    cartItem:CartReducer,
    wishlist:WishlistReducer,
    invoice:invoiceReducer,
    registration:loginReducer,
})

export default RootReducer