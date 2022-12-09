import {useDispatch} from "react-redux";
import {deleteReviewThunk, updateReviewThunk} from "./processing/review-thunks";

const ReviewItem = (
    {
        review = {
            "album_id": "123",
            "text": "I found this by scrolling through their discography",
            "score": "3",
            "date": "2022-12",
            "reviewer": "Alice",
            "likes": 12
        }

    },) => {
    const dispatch = useDispatch()
    const deleteReviewHandler = (id) => {
        dispatch(deleteReviewThunk(id));
    }
    const likeReviewHandler = (rev) => {
        const newRev = {
            ...rev,
            "likes": rev.likes + 1
        }
        dispatch(updateReviewThunk(newRev))
    }
    return (
        <div>
            <div className={"d-flex flex-row justify-content-between"}>
                <div>
                    <a href={`/profile/${review.reviewer}`}>
                        <span className={"fw-bold"}>{review.reviewer}</span>
                    </a>
                    <span className={"fw-bold"}> • {review.date}</span>
                </div>
                <div>
                    <button type="button" className="btn btn-danger" onClick={() => {deleteReviewHandler(review._id)}}>Farm upstate</button>
                </div>
            </div>
            <br/>
            <div className={"d-flex flex-row justify-content-between"}>
                <div>
                    {review.text}
                </div>
                <div onClick={() => {
                    likeReviewHandler(review)
                }}>
                    {review.likes}👍
                </div>
            </div>
        </div>
    )
}
export default ReviewItem;