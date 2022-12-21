import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUsersThunk} from "./processing/user-thunks";


function ConnectComponent() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsersThunk())
    }, [dispatch])

    const userDetails = useSelector(state => state.user)
    const users = userDetails.users

    return(
        <div>
            <h1>Connect!</h1>
            Explore other users, and see who you'd like to follow
            <div className={"list-group"}>
                {users.map((user) =>
                    <div className={"list-group-item m-3"}>
                        <div className={"d-flex flex-row justify-content-between"}>
                            <a href={`/profile/${user.username}`}>
                                <span className={"fw-bold"}>{user.username}</span>
                            </a>
                            <div>{user.type}</div>
                        </div>
                        <div>{user.bio}</div>
                    </div>

                )}
            </div>
        </div>

    );
}
export default ConnectComponent;