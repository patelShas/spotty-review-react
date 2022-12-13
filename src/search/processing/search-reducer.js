import {createSlice} from "@reduxjs/toolkit";
import {searchThunk} from "./search-thunk";

const initialState = {
    loading: false,
    results: []
}

const albumSearchSlice = createSlice({
    name: 'albumSearch',
    initialState,
    extraReducers: {
        [searchThunk.pending]: (state) => {
            state.loading = true
            state.results = []}
        ,
        [searchThunk.rejected]: (state) => {
            state.loading = false
            state.results = []}
        ,
        [searchThunk.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.results = payload
        },
    }
});

export default albumSearchSlice.reducer;