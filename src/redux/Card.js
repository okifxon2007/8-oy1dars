import { createSlice } from "@reduxjs/toolkit";
import card from "../json/card.json"
const initialState =card;
console.log(card);
const counterSlice = createSlice({
    name: "card",
    initialState, // Bu yerda 'card' emas, 'initialState' ishlatiladi
    reducers: {
        incrument: (state, action) => {
            state.push(action.payload); // [...state, action.payload] bilan bir xil, lekin Redux Toolkit'da to'g'ridan-to'g'ri holatni o'zgartirishga ruxsat beradi
        }
    }
});

// Actionni eksport qilish
export const { incrument } = counterSlice.actions;

// Reducerni eksport qilish
export default counterSlice.reducer;
