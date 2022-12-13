import {createSlice} from "@reduxjs/toolkit";
import {searchThunk} from "./search-thunk";

const initialState = {
    searchStatus: 0,
    results: []
}

const albumSearchSlice = createSlice({
    name: 'albumSearch',
    initialState,
    extraReducers: {
        [searchThunk.pending]: (state) => {
            state.searchStatus = 0
            state.results = []}
        ,
        [searchThunk.rejected]: (state) => {
            state.searchStatus = -1
            state.results = []}
        ,
        [searchThunk.fulfilled]: (state, {payload}) => {
            state.searchStatus = 1
            state.results = payload
        },
    }
});

export default albumSearchSlice.reducer;