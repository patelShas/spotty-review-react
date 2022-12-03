import {useSelector} from "react-redux";
import ReviewItem from "./reviewItem";

const ReviewsList = (
    {
        album = {
            "_id": "123"
        }
    }
) => {
    const reviewsArray = useSelector(state => state.reviews).filter(review => review.album_id === album._id)
    return (
        <>
            {reviewsArray.map(review => (
                <div className={"list-group-item"} key={review._id}>
                    <ReviewItem review={review}/>
                </div>
            ))}
        </>
    )
}
export default ReviewsList;