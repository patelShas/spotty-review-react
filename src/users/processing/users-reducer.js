import {createSlice} from "@reduxjs/toolkit";
import {createUserThunk, logInUserThunk} from "./user-thunks";

const initialState = {
    user: {
        username: "anon",
        password: "N/A",
        bio: "",
        following: [],
        type: "ANON"
    },
    loading: false,
    failed: false
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      logOut(state, action) {
          state.user = {
              username: "anon",
              password: "N/A",
              bio: "",
              following: [],
              type: "ANON"
          }
      }
    },
    extraReducers: {
        [createUserThunk.pending]:
            (state) => {
                state.loading = true
                state.failed = false
            },
        [createUserThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                if (payload !== "") {
                    state.user = payload
                } else {
                    state.failed = true
                }
            },
        [createUserThunk.rejected]:
            (state) => {
                state.loading = false
                state.failed = true
            },
        [logInUserThunk.pending]:
            (state) => {
                state.loading = true
                state.failed = false
            },
        [logInUserThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                if (payload !== "") {
                    state.user = payload
                } else {
                    state.failed = true
                }
            },
        [logInUserThunk.rejected]:
            (state) => {
                state.loading = false
                state.failed = true
            },


    },

});

export const {logOut} = userSlice.actions
export default userSlice.reducer;