import {useLocation} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import DetailItem from "./detailItem.js";
import ReviewsList from "../reviews/reviewsList";
import ReviewWriter from "../reviews/reviewWriter";
import {useEffect} from "react";
import {findDetailsThunk} from "./processing/detail-thunks";


function DetailsComponent() {
    const {pathname} = useLocation()
    const parts = pathname.split("/")
    const albumsArray = useSelector(state => state.albums)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findDetailsThunk(album._id))
    }, [album._id, dispatch])
    let chosenAlbum
    for (let i = 0; i < albumsArray.length; i++) {
        if (albumsArray[i]._id === parts[parts.length - 1]) {
            chosenAlbum = albumsArray[i]
        }
    }
    return (
        <div>
            {chosenAlbum ? (
                    <div className={"list-group"}>
                        <DetailItem album={chosenAlbum}/>
                        <ReviewWriter album={chosenAlbum}/>
                        <ReviewsList album={chosenAlbum}/>
                    </div>
                ) :
                <div className={"p-3 bg-danger"}>
                    <h2 className={"text-white"}>{"Sorry, but no matching album was found"}</h2>
                </div>}

        </div>
    )
}

export default DetailsComponent;