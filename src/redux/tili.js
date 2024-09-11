import { createSlice } from "@reduxjs/toolkit";
const initialState ="in";

const product = createSlice({
    name: "card",
    initialState,
    reducers: {
        CardQoshish: (state, action) => {
            state.push(action.payload); 
        },
        CardAyrish: (state, action) => {
            return state.filter((e) => e.id !== action.payload);
        }
        
    }
});

export const { CardQoshish,CardAyrish } = product.actions;

export default product.reducer;
