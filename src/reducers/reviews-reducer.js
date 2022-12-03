import { createSlice } from "@reduxjs/toolkit";
import reviews from './reviews.json';

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState: reviews
});

export default reviewsSlice.reducer;