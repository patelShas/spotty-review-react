import ReviewItem from "../reviews/reviewItem";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findReviewsGenericThunk} from "../reviews/processing/review-thunks";
import DetailsContent from "../details/detailsContent";

function HomeComponent() {
    const {reviews} = useSelector(state => state.reviewData)
    const viewer = useSelector((state) => state.user.user)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findReviewsGenericThunk(``))
    }, [])

    return (<div>
        <h1 className={"display-1"}>The Spotify Music Reviewer</h1>
        <div>

            <img className="rounded-4 img-fluid"
                 src="https://cdn.vox-cdn.com/thumbor/yP8ceUvjxtHBV7KfFA6E5VcdNCM=/0x0:5000x3070/3570x2008/filters:focal(2100x1135:2900x1935):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70221368/GettyImages_1140668438_green.0.jpg"
                 alt="title img" height="500px"/>
        </div>
        <div className="row">
            <div>
                {
                    (viewer.type === "ANON") ? (
                        <>
                            <h2 className={"display-5"}>Latest Reviews</h2>
                            <div className={"list-group"}>
                                {reviews.slice(-3).map(review => (
                                    <div className={"list-group-item"} key={review._id}>
                                        <ReviewItem review={review}/>
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <>
                            <h2 className={"display-5"}>Recent reviews from who you know:</h2>
                            <div className={"list-group"}>
                                {reviews.filter(review => viewer.following.includes(review.reviewer)).slice(-3).map(review => (
                                    <div className={"list-group-item"} key={review._id}>
                                        <ReviewItem review={review}/>
                                    </div>))
                                }
                            </div>
                        </>
                    )
                }

            </div>
        </div>
    </div>);
}

export default HomeComponent;