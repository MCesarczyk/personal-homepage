import { put, takeLatest } from "@redux-saga/core/effects";
import { fetchReposData, setState } from "../repos/reposSlice";

function* fetchReposDataHandler() {
    yield put(setState("loading"));
};

export function* reposSaga() {
    yield takeLatest(fetchReposData.type, fetchReposDataHandler);
};