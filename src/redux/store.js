import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Card";
import product from "./Product"
import themeReducer from "./Darknod"
export let store = configureStore({
    reducer: {
        counter: counterSlice,
        product:product,
        theme: themeReducer
    }
});
