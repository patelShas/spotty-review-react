const ReviewItem = (
    {
        review = {
            "album_id": "123",
            "text": "I found this by scrolling through their discography",
            "score": "3",
            "date": "2022-12",
            "reviewer": "Alice"
        }

    },) => {
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
                    Weekend at bernies
                </div>
            </div>
            <br/>
            {review.text}
        </div>
    )
}
export default ReviewItem;