import {useDispatch, useSelector} from "react-redux";
import ReviewItem from "./reviewItem";
import {useEffect} from "react";
import {findReviewThunk} from "./processing/review-thunks";

const ReviewsList = (
    {
        album = {
            "_id": "123"
        }
    }
) => {
    const {reviews, loading} = useSelector(state => state.reviewData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findReviewThunk(album._id))
    }, [album._id, dispatch])
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
export default ReviewsList;