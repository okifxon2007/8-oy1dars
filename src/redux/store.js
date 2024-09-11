import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Card";
import product from "./Product"
export let store = configureStore({
    reducer: {
        counter: counterSlice,
        product:product

    }
});
