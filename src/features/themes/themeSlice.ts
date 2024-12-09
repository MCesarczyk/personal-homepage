import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface ThemeState {
    isThemeDark: boolean | null;
}

const initialState: ThemeState = {
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

export const selectTheme = (state: RootState): boolean | null => state.theme.isThemeDark;

export default themeSlice.reducer;
