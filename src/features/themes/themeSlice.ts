import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState = {
    isThemeDark: null,
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        fetchThemeState: () => { },
        setTheme: (state, { payload: newState }) => {
            state.isThemeDark = newState;
        },
    },
});

export const {
    fetchThemeState,
    setTheme,
} = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.isThemeDark;

export default themeSlice.reducer;
