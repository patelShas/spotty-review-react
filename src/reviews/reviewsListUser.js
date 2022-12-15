import {useDispatch, useSelector} from "react-redux";
import ReviewItem from "./reviewItem";
import {useEffect} from "react";
import {findReviewByUserThunk} from "./processing/review-thunks";

const ReviewsListUser = (
    {
        username= "Bob"
    }
) => {

    const {reviews, loading} = useSelector(state => state.reviewData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findReviewByUserThunk(username))
    }, [username, dispatch])
    return (
        <>
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {reviews.map(review => (
                <div className={"list-group-item"} key={review._id}>
                    <ReviewItem review={review}/>
                </div>
            ))}
        </>
    )
}
export default ReviewsListUser;