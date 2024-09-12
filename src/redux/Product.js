import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const product = createSlice({
    name: "product",
    initialState,
    reducers: {
        CardQoshish: (state, action) => {
            const isExisting = state.some((e) => e.id === action.payload.id);
            if (!isExisting) {
                state.push(action.payload);
            }
        },
        CardAyrish: (state, action) => {
            return state.filter((e) => e.id !== action.payload.id);
        }
    }
});

export const { CardQoshish, CardAyrish } = product.actions;

export default product.reducer;
