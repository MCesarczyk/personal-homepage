import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isThemeDark: false,
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, {payload: newState}) => {
            state.isThemeDark = newState;
        },
    },
});

export const {
    setTheme,
} = themeSlice.actions;

export const selectTheme = state => state.theme.isThemeDark;

export default themeSlice.reducer;