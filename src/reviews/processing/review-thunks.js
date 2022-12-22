import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./review-services"

export const findReviewsGenericThunk = createAsyncThunk(
    'reviews/findReviewsAlbum', async (query) =>
        await service.findReviewsGeneric(query)
)

export const deleteReviewThunk = createAsyncThunk(
    'reviews/deleteReview',
    async (rev_id) => {
        await service.deleteReview(rev_id)
        return rev_id
    })

export const createReviewThunk = createAsyncThunk(
    'reviews/createReview', async (rev) =>
        await service.createReview(rev)
)

export const updateReviewThunk =
    createAsyncThunk(
        'reviews/updateReview',
        async (rev) =>
            await service.updateReview(rev)
    )


