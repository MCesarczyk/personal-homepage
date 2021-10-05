import { call, put, takeLatest } from "@redux-saga/core/effects";
import { fetchThemeState, setTheme } from "./themeSlice";

function* fetchThemeStateHandler() {
    console.log("themeSaga");
};

export function* themeSaga() {
    yield takeLatest(fetchThemeState.type, fetchThemeStateHandler);
};