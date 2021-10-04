import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isThemeDark: false,
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducer: {
        setTheme: (state) => {
            state.isThemeDark = !state.isThemeDark;
        },
    },
});

export const {
    setTheme,
} = themeSlice.actions;

export const selectTheme = state => state.theme.isThemeDark;

export default themeSlice.reducer;