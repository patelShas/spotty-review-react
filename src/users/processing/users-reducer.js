import {createSlice} from "@reduxjs/toolkit";
import {createUserThunk} from "./user-thunks";

const initialState = {
    user: {
        username: "anon",
        password: "N/A",
        bio: "",
        following: [],
        type: "ANON"
    },
    loading: false
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
        [createUserThunk.pending]:
            (state) => {
                state.loading = true
            },
        [createUserThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                if (payload !== "") {
                    state.user = payload
                }
            },
        [createUserThunk.rejected]:
            (state) => {
                state.loading = false
            },


    },

});

export default userSlice.reducer;