import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    repos: [],
    state: "idle",
};

const reposSlice = createSlice({
    name: 'repos',
    initialState,
    reducers: {
        fetchReposData: () => {},
        setRepos: (state, {payload: newRepos}) => {
            state.repos = newRepos;
        },
        setState: (state, {payload: newState}) => {
            state.state = newState;
        },
    },
});

export const {
    fetchReposData,
    setRepos,
    setState,
} = reposSlice.actions;

export const selectRepos = state => state.repos.repos;
export const selectState = state => state.repos.state;

export default reposSlice.reducer;