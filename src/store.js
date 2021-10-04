import { configureStore } from "@reduxjs/toolkit";
import reposSlice from "./features/repos/reposSlice";

const store = configureStore({
    reducer: {
        repos: reposSlice
    }
});

export default store;