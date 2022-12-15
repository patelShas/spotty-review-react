import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./review-services"

export const findReviewByAlbumThunk = createAsyncThunk(
    'reviews/findReviewsAlbum', async (album_id) =>
        await service.findReviewsByAlbum(album_id)
)

export const findReviewByUserThunk = createAsyncThunk(
    'reviews/findReviewsUser', async (user_name) =>
        await service.findReviewsByUser(user_name)
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


