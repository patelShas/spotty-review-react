import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service from "./search-services"

export const searchThunk = createAsyncThunk(
    'search/searchAlbums', async (query) => {
        const resp = await service.searchAlbums(query)
        return resp
    }
)