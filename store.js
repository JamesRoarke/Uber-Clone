import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slice/navSlice";
import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./redux/reducers/cartReducer";


export const store = configureStore ({
    reducer: {
        nav: navReducer,
        cartReducer: cartReducer,
    }
});