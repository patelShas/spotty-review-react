import {deleteReview, incrementLikes} from "../reducers/reviews-reducer";
import {useDispatch} from "react-redux";

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
    const deleteHandler = (id) => {
        dispatch(deleteReview(id))
    }
    const likeHandler = (id) => {
        dispatch(incrementLikes(id))
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
                    <button type="button" className="btn btn-danger" onClick={() => {deleteHandler(review._id)}}>Farm upstate</button>
                </div>
            </div>
            <br/>
            <div className={"d-flex flex-row justify-content-between"}>
                <div>
                    {review.text}
                </div>
                <div onClick={() => {
                    likeHandler(review._id)
                }}>
                    {review.likes}👍
                </div>
            </div>
        </div>
    )
}
export default ReviewItem;