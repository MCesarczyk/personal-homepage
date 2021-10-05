import { all } from "@redux-saga/core/effects";
import { themeSaga } from "./features/themes/themeSaga";
import { reposSaga } from "./features/repos/reposSaga";

export default function* rootSaga() {
    yield all([
        themeSaga(),
        reposSaga(),
    ]);
}