import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./subject-services"

export const findSubjectUserThunk = createAsyncThunk(
    'user/findSubject', async (user_name) => {
        const response = await service.findUser(user_name)
        return response
    }
)