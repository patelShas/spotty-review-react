import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createReviewThunk} from "./processing/review-thunks";
import {getProfileThunk} from "../users/processing/user-thunks";

const ReviewWriter = (
    {
        album = {
            "_id": "123"
        }
    }
) => {

    const details = useSelector(state => state.user)
    const userType = details.user.type

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProfileThunk())
    }, [dispatch])

    const [showAlert, setShowAlert] = useState(false);

    const date = new Date()
    const [rev, setRev] = useState({
        text: '',
    });
    const newRevHandler = (event) => {
        const revValue = event.target.value;
        const newRev = {
            text: revValue,
        };
        setRev(newRev)
    }
    const submitHandler = () => {
        if (userType === "ANON") {
            setShowAlert(true);
        } else {
            var newReview = {
                album_id: album._id,
                text: rev.text,
                date: `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`,
                reviewer: details.user.username,
                score: document.querySelector("#rating").value,
                likes: 0
            };
            dispatch(createReviewThunk(newReview))
        }

    }
    return (
        <>
            <div className="alert alert-info" role="alert" hidden={!showAlert}>
                Sorry, Submitting a review requires login
            </div>
            <div className={"list-group-item d-flex flex-row justify-content-between"}>
                <input className="form-control" value={rev.text} onChange={newRevHandler}/>
                <select id="rating" name="stars">
                    <option value={1}>1 ⭐</option>
                    <option value={2}>2 ⭐</option>
                    <option value={3}>3 ⭐</option>
                    <option value={4}>4 ⭐</option>
                    <option value={5}>5 ⭐</option>
                </select>
                <button type="button" className="btn btn-primary" onClick={submitHandler}>Submit</button>
            </div>
        </>

    )
}
export default ReviewWriter;