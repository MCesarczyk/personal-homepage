import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { Repo } from "./types";

type State = "idle" | "loading" | "success" | "error";

interface ReposState {
    repos: Repo[];
    state: State;
}

const initialState: ReposState = {
    repos: [],
    state: "idle" as State,
};

const reposSlice = createSlice({
    name: 'repos',
    initialState,
    reducers: {
        fetchReposData: () => { },
        setRepos: (state, { payload: newRepos }) => {
            state.repos = newRepos;
        },
        setState: (state, { payload: newState }) => {
            state.state = newState;
        },
    },
});

export const {
    fetchReposData,
    setRepos,
    setState,
} = reposSlice.actions;

export const selectRepos = (state: RootState): Repo[] => state.repos.repos;
export const selectState = (state: RootState): State => state.repos.state;

export default reposSlice.reducer;
