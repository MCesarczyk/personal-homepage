import { call, put, select, takeLatest } from "@redux-saga/core/effects";
import { fetchLocalStorageState } from "../../utils/fetchLocalStorageState";
import { saveLocalStorageState } from "../../utils/saveLocalStorageState";
import { fetchThemeState, selectTheme, setTheme } from "./themeSlice";

function* fetchThemeStateHandler() {
    const isThemeDark = yield call(fetchLocalStorageState, "isThemeDark", false);
    yield put(setTheme(isThemeDark));
};

function* saveThemeStateHandler() {
    const isThemeDark = yield select(selectTheme);
    yield call(saveLocalStorageState, "isThemeDark", isThemeDark);
};

export function* themeSaga() {
    yield takeLatest(fetchThemeState.type, fetchThemeStateHandler);
    yield takeLatest(setTheme.type, saveThemeStateHandler);
};