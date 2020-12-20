import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { userRegisterReducer } from "./reducers/userReducers.js";
import thunk from "redux-thunk";

const cartItems = ['Kuala Lumpur'];
const city = null;

const initialState={ cart:{ cartItems }, userSignin:{city}};
const reducer = combineReducers({
    userRegister: userRegisterReducer,
})

const store = createStore(reducer, initialState , compose(applyMiddleware(thunk)));
export default store;