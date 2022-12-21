import {useDispatch, useSelector} from "react-redux";
import {deleteReviewThunk, updateReviewThunk} from "./processing/review-thunks";
import {useState} from "react";

const ReviewItem = (
    {
        review = {
            "album_id": "123",
            "text": "I found this by scrolling through their discography",
            "date": "2022-12",
            "reviewer": "Alice",
            "likes": 12
        }

    },) => {
    const dispatch = useDispatch()
    const userDetails = useSelector(state => state.user.user)
    const [showAlert, setShowAlert] = useState(false);
    const deleteReviewHandler = (id) => {
        dispatch(deleteReviewThunk(id));
    }
    const likeReviewHandler = (rev) => {
        if (userDetails.type === "ANON") {
            setShowAlert(true);
        } else {
            const newRev = {
                ...rev,
                "likes": rev.likes + 1
            }
            dispatch(updateReviewThunk(newRev))
        }
    }
    return (
        <div>
            <div className={"d-flex flex-row justify-content-between"}>
                <div>
                    <a href={`/profile/${review.reviewer}`}>
                        <span className={"fw-bold"}>{review.reviewer}</span>
                    </a>
                    <span className={"fw-bold"}> • {review.date} •</span>
                    <a href={`/details/${review.album_id}`}>
                        <span className={"fw-bold"}> Jump to Album</span>
                    </a>
                </div>
                {(userDetails.type === "ADMIN" || userDetails.username === review.reviewer) &&
                    <div className={"border-white"}>
                        <button type="button" className="btn btn-danger rounded-pill" onClick={() => {
                            deleteReviewHandler(review._id)
                        }}>Delete Review
                        </button>
                    </div>
                }

            </div>
            <br/>
            <div className="alert alert-info" role="alert" hidden={!showAlert}>
                Sorry, this action requires login
            </div>
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
            <div className={""}>
                <span>I rate this album: </span>
                <span className={"fw-bold"}>{review.score} ⭐️</span>
            </div>
        </div>
    )
}
export default ReviewItem;