import {createSlice} from "@reduxjs/toolkit";
import {createUserThunk, getProfileThunk, logInUserThunk, logOutUserThunk, updateProfileThunk} from "./user-thunks";

const initialState = {
    user: {
        username: "Anon",
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
              username: "Anon",
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
                state.user = payload
                state.failed = (state.user.username === "Anon")
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
                state.failed = false
                state.user = payload
            },
        [logInUserThunk.rejected]:
            (state) => {
                state.loading = false
                state.failed = true
            },
        [getProfileThunk.fulfilled]:
            (state, {payload}) => {
                console.log("profile:")
                console.log(payload)
                state.user = payload
                state.failed = (state.user.username === "Anon")
            },
        [logOutUserThunk.fulfilled]:
            (state, {payload}) => {
                state.user = payload
            },
        [updateProfileThunk.fulfilled]:
            (state, {payload}) => {
                state.user = payload
            },


    },

});

export const {logOut} = userSlice.actions
export default userSlice.reducer;