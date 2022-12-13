import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./detail-services"

export const findDetailsThunk = createAsyncThunk(
    'details/findDetails', async (album_id) =>
        await service.findDetails(album_id)
)