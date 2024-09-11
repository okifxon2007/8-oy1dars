import { createSlice } from "@reduxjs/toolkit";
import card from "../json/card.json"
const initialState =card;
console.log(card);
const counterSlice = createSlice({
    name: "card",
    initialState, 
    reducers: {
        incrument: (state, action) => {
            state.push(action.payload);
        }
    }
});

export const { incrument } = counterSlice.actions;

export default counterSlice.reducer;
