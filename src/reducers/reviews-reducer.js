import { createSlice } from "@reduxjs/toolkit";
import reviews from './reviews.json';

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState: reviews,
    reducers: {
        addReview(state, action) {
            state.push({
                _id: (new Date()).getTime(),
                ...action.payload,
            });
        },
        deleteReview(state, action) {
            const index = state
                .findIndex(review =>
                    review._id === action.payload);
            state.splice(index, 1);
        },
        incrementLikes(state, action) {
            const review = state
                .find((review) =>
                    review._id === action.payload)
            review.likes += 1
        },
    }

});

export const {addReview, deleteReview, incrementLikes} = reviewsSlice.actions
export default reviewsSlice.reducer;