// src/features/theme/themeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = 'dark'; // Boshlang'ich tema

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      return state === 'dark' ? 'light' : 'dark';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
