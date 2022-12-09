import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./review-services"

export const findReviewThunk = createAsyncThunk(
    'reviews/findReviews', async (album_id) =>
        await service.findReviews(album_id)
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


