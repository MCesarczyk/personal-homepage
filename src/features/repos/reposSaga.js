import { call, delay, put, takeLatest } from "@redux-saga/core/effects";
import { fetchReposData, setRepos, setState } from "./reposSlice";
import { fetchAPIData } from "../../utils/fetchAPIData";

function* fetchReposDataHandler() {
    try {
        yield put(setState("loading"));
        const apiURL = 'https://api.github.com/users/MCesarczyk/repos?sort="updated"';
        const repos = yield call(fetchAPIData, apiURL);
        yield put(setRepos(repos));
        yield delay(2_000);
        yield put(setState("success"));
    } catch {
        yield put(setState("error"));
    }
};

export function* reposSaga() {
    yield takeLatest(fetchReposData.type, fetchReposDataHandler);
};