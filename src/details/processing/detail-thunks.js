import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./detail-services"

export const findDetailsThunk = createAsyncThunk(
    'details/findDetails', async (album_id) => {
        const resp = await service.findDetails(album_id)
        console.log(resp)
        return resp
    }

)