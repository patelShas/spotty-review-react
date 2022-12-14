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