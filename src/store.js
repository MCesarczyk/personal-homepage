import { configureStore } from "@reduxjs/toolkit";
import reposSlice from "./features/repos/reposSlice";
import themeSlice from "./features/themes/themeSlice";

const store = configureStore({
    reducer: {
        repos: reposSlice,
        theme: themeSlice,
    }
});

export default store;