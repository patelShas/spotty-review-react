import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./user-services"

export const findUserThunk = createAsyncThunk(
    'users/findUser', async (user_id) =>
        await service.findUser(user_id)
)

export const deleteUserThunk = createAsyncThunk(
    'users/deleteUser',
    async (user_id) => {
        await service.deleteUser(user_id)
        return user_id
    })

export const createUserThunk = createAsyncThunk(
    'users/createUser', async (user) =>
        await service.createUser(user)
)

export const updateUserThunk =
    createAsyncThunk(
        'users/updateUser',
        async (user) =>
            await service.updateUser(user)
    )