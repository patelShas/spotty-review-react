import {createSlice} from "@reduxjs/toolkit";
import {findSubjectUserThunk} from "./subject-thunk";

const initialState = {
    user: {
    },
    failed: false
}


const subjectSlice = createSlice({
    name: 'subject',
    initialState,
    extraReducers: {
        [findSubjectUserThunk.fulfilled]:
            (state, {payload}) => {
                state.user = payload
                payload ? (state.failed = false) : (state.failed = true)
            },
    },

});

export default subjectSlice.reducer;