import { call, put, select, takeLatest } from "@redux-saga/core/effects";
import { fetchLocalStorageState } from "../../utils/fetchLocalStorageState";
import { saveLocalStorageState } from "../../utils/saveLocalStorageState";
import { fetchThemeState, selectTheme, setTheme } from "./themeSlice";
import { SagaIterator } from "@redux-saga/core";

function* fetchThemeStateHandler(): SagaIterator<void> {
    const isThemeDark = yield call({ context: null, fn: fetchLocalStorageState }, "isThemeDark", 'false');
    yield put(setTheme(isThemeDark));
};

function* saveThemeStateHandler(): SagaIterator<void> {
    const isThemeDark = yield select(selectTheme);
    yield call(saveLocalStorageState, "isThemeDark", isThemeDark);
};

export function* themeSaga() {
    yield takeLatest(fetchThemeState.type, fetchThemeStateHandler);
    yield takeLatest(setTheme.type, saveThemeStateHandler);
};
