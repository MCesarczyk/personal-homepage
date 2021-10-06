import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import reposSlice from "./features/repos/reposSlice";
import themeSlice from "./features/themes/themeSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        repos: reposSlice,
        theme: themeSlice,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;