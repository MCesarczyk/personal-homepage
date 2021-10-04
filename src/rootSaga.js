import { all } from "@redux-saga/core/effects";
import { themeSaga } from "./features/themes/themeSaga";

export default function* rootSaga() {
    yield all([
        themeSaga(),
    ]);
}