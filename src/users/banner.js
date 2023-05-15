import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProfileThunk} from "./processing/user-thunks";

const NameBanner = () => {

    const details = useSelector(state => state.user)
    const username = details.user.username

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProfileThunk())
    }, [dispatch])


    return (
        <div className={"d-none d-md-block"}>
            <h1>Hello, {username}!</h1>
        </div>
    )
}

export default NameBanner;