import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./user-services"


export const createUserThunk = createAsyncThunk(
    'users/createUser', async (user) => {
        const newuser = await service.createUser(user)
        return newuser
    }
)

export const logInUserThunk = createAsyncThunk(
    'users/logInUser', async (credentials) => {
        const newuser = await service.logInUser(credentials)
        return newuser
    }
)

export const logOutUserThunk = createAsyncThunk(
    'users/logInUser', async (credentials) => {
        const newuser = await service.logOutUser()
        return newuser
    }
)

export const getProfileThunk = createAsyncThunk(
    'users/profile', async () => {
        return await service.getProfile()
    }
)
