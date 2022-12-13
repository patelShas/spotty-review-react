import { createSlice } from "@reduxjs/toolkit";
import {createUserThunk, deleteUserThunk, findUserThunk, updateUserThunk} from "./user-thunks";

const initialState = {
    users: [],
    loading: true
}


const usersSlice = createSlice({
                                     name: 'users',
                                     initialState,
                                     extraReducers: {
                                         [findUserThunk.pending]:
                                             (state) => {
                                                 state.loading = true
                                                 state.users = []
                                             },
                                         [findUserThunk.fulfilled]:
                                             (state, { payload }) => {
                                                 state.loading = false
                                                 state.users = payload
                                             },
                                         [findUserThunk.rejected]:
                                             (state) => {
                                                 state.loading = false
                                             },
                                         [deleteUserThunk.fulfilled] :
                                             (state, { payload }) => {
                                                 state.loading = false
                                                 state.users = state.users
                                                     .filter(user => user._id !== payload)
                                             },
                                         [createUserThunk.fulfilled]:
                                             (state, { payload }) => {
                                                 state.loading = false
                                                 state.users.push(payload)
                                             },
                                         [updateUserThunk.fulfilled]:
                                             (state, { payload }) => {
                                                 state.loading = false
                                                 const userNdx = state.users
                                                     .findIndex((user) => user._id === payload._id)
                                                 state.users[userNdx] = {
                                                     ...state.users[userNdx],
                                                     ...payload
                                                 }
                                             }


                                     },
                                     reducers: {
                                         addUser(state, action) {
                                             state.push({
                                                            _id: (new Date()).getTime(),
                                                            ...action.payload,
                                                        });
                                         },
                                     }

                                 });

export const {addUser} = usersSlice.actions
export default usersSlice.reducer;