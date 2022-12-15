import {useLocation} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import DetailItem from "./detailItem.js";
import ReviewsListAlbum from "../reviews/reviewsListAlbum";
import ReviewWriter from "../reviews/reviewWriter";
import {useEffect} from "react";
import {findDetailsThunk} from "./processing/detail-thunks";
import DetailsContent from "./detailsContent";


function DetailsComponent() {
    const {pathname} = useLocation()
    const parts = pathname.split("/")
    const album_id = parts[parts.length - 1]

    return <DetailsContent album_id={album_id}/>
}

export default DetailsComponent;