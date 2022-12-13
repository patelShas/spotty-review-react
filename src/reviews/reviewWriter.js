import {useState} from "react";
import {useDispatch} from "react-redux";
import {createReviewThunk} from "./processing/review-thunks";

const ReviewWriter = (
    {
        album = {
            "_id": "123"
        }
    }
) => {
    const date = new Date()
    const [rev, setRev] = useState({
        text: '',
    });
    const dispatch = useDispatch()
    const newRevHandler = (event) => {
        const revValue = event.target.value;
        const newRev = {
            text: revValue,
        };
        setRev(newRev)
    }
    const submitHandler = () => {
        const newReview = {
            album_id: album._id,
            text: rev.text,
            date: `${date.getFullYear()} - ${date.getMonth()}`,
            reviewer: "Bob",
            score: document.querySelector("#rating").value,
            likes: 0
        };
        dispatch(createReviewThunk(newReview))
    }
    return (
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
    )
}
export default ReviewWriter;