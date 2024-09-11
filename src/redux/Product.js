import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const product = createSlice({
    name: "Product",
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
console.log(initialState);
export const { CardQoshish,CardAyrish } = product.actions;

export default product.reducer;
