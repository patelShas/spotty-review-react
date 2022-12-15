import {useLocation} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import DetailItem from "./detailItem.js";
import ReviewsListAlbum from "../reviews/reviewsListAlbum";
import ReviewWriter from "../reviews/reviewWriter";
import {useEffect} from "react";
import {findDetailsThunk} from "./processing/detail-thunks";


function DetailsComponent() {
    const {pathname} = useLocation()
    const parts = pathname.split("/")
    const album_id = parts[parts.length - 1]

    const details = useSelector(state => state.details)
    const fullfilled = details.fulfilled
    const chosenAlbum = details.details

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findDetailsThunk(album_id))
    }, [album_id, dispatch])

    return (
        <div>
            {fullfilled === 1 ? (
                    <div className={"list-group"}>
                        <DetailItem album={chosenAlbum}/>
                        <ReviewWriter album={chosenAlbum}/>
                        <ReviewsListAlbum album={chosenAlbum}/>
                    </div>
                ) : (
                fullfilled === -1 ? (
                    <div className={"p-3 bg-danger"}>
                        <h2 className={"text-white"}>{"Sorry, but no matching album was found"}</h2>
                    </div>
                ) : (
                    <div className={"p-3 bg-secondary"}>
                        <h2 className={"text-white"}>{"loading..."}</h2>
                    </div>
                )
            )}
        </div>
    )
}

export default DetailsComponent;