import { call, put, takeLatest } from "@redux-saga/core/effects";
import { fetchThemeState, setTheme } from "./themeSlice";
import { useLocalStorageState } from "../../../src/useLocalStorageState";

function* fetchThemeStateHandler() {};

export function* themeSaga() {
    yield takeLatest(fetchThemeState.type, fetchThemeStateHandler);
};