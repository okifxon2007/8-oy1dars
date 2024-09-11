import { createSlice } from "@reduxjs/toolkit";

// Initial state sifatida bo'sh massiv ishlatilmoqda
const initialState = [];

const product = createSlice({
    name: "card",
    initialState, // Bu yerda 'card' emas, 'initialState' ishlatiladi
    reducers: {
        CardQoshish: (state, action) => {
            state.push(action.payload); // [...state, action.payload] bilan bir xil, lekin Redux Toolkit'da to'g'ridan-to'g'ri holatni o'zgartirishga ruxsat beradi
        },
        CardAyrish: (state, action) => {
            return state.filter((e) => e.id !== action.payload);
        }
        
    }
});

export const { CardQoshish,CardAyrish } = product.actions;

export default product.reducer;
