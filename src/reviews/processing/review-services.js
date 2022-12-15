import axios from 'axios';

const REVIEWS_API = 'http://localhost:4000/api/reviews';

export const findReviewsGeneric = async (query_string) => {
    const response = await axios.get(`${REVIEWS_API}?${query_string}`);
    const reviews = response.data;
    return reviews;
}

export const deleteReview = async (rev_id) => {
    const response = await axios
        .delete(`${REVIEWS_API}/${rev_id}`)
    return response.data
}

export const createReview = async (rev) => {
    const response = await axios.post(REVIEWS_API, rev)
    return response.data;
}


export const updateReview = async (rev) => {
    await axios.put(`${REVIEWS_API}/${rev._id}`, rev);
    return rev;
}