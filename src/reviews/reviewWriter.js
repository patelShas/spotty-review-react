import {useState} from "react";

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
    const newRevHandler = (event) => {
        const revValue = event.target.value;
        const newRev = {
            text: revValue,
        };
        setRev(newRev)
    }
    const submitHandler = () => {
        const newReview = {
            text: rev.text,
            score: "0",
            date: `${date.getFullYear()} - ${date.getMonth()}`,
            reviewer: "Bob",
            likes: 0
        };
        console.log(newReview.text)
    }
    return (
        <div className={"list-group-item d-flex flex-row justify-content-between"}>
            <input className="form-control" value={rev.text} onChange={newRevHandler}/>
            <button type="button" className="btn btn-primary" onClick={submitHandler}>Submit</button>
        </div>
    )
}
export default ReviewWriter;