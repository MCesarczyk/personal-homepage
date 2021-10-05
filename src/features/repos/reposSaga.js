import { call, delay, put, takeLatest } from "@redux-saga/core/effects";
import { fetchReposData, setRepos, setState } from "../repos/reposSlice";
import { fetchAPIData } from "./fetchAPIData";

function* fetchReposDataHandler() {
    yield put(setState("loading"));
    const apiURL = 'https://api.github.com/users/MCesarczyk/repos?sort="updated"';
    const repos = yield call(fetchAPIData, apiURL);
    yield put(setRepos(repos));
    yield delay(2_000);
    yield put(setState("success"));
};

export function* reposSaga() {
    yield takeLatest(fetchReposData.type, fetchReposDataHandler);
};