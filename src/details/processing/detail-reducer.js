import {createSlice} from "@reduxjs/toolkit";
import {findDetailsThunk} from "./detail-thunks";

const initialState = {
    fulfilled: 0,
    details: {}
}

const detailsSlice = createSlice({
    name: 'details',
    initialState,
    extraReducers: {
        [findDetailsThunk.pending]: (state) => {
            state.fulfilled = 0
            state.details = {}
        },
        [findDetailsThunk.rejected]: (state) => {
            state.fulfilled = -1
            state.details = {}
        },
        [findDetailsThunk.fulfilled]: (state, {payload}) => {
            state.fulfilled = 1
            state.details = payload
        },
    }
});

export default detailsSlice.reducer;
