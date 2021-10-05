import { call, put, takeLatest } from "@redux-saga/core/effects";
import { fetchLocalStorageData } from "./fetchLocalStorageData";
import { fetchThemeState, setTheme } from "./themeSlice";

function* fetchThemeStateHandler() {
    const theme = yield call(fetchLocalStorageData, "theme", "lightMode");
    console.log(theme);
};

export function* themeSaga() {
    yield takeLatest(fetchThemeState.type, fetchThemeStateHandler);
};