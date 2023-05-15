import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProfileThunk, updateProfileThunk} from "../users/processing/user-thunks";
import ReviewsListUser from "../reviews/reviewsListUser";

const ProfileContent = (
    {
        subjectUser = {
            username: "Anon",
            password: "N/A",
            type: "ANON",
            bio: "You aren't currently logged in. Some content is unavailable",
            following: []
        }
    }
) => {
    const viewingUser = useSelector(state => state.user.user)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProfileThunk())
    }, [dispatch])
    const followHandler = () => {
        let newUser = {
            ...viewingUser,
            following: [subjectUser.username, ...viewingUser.following]
        }
        dispatch(updateProfileThunk(newUser))
    }
    const unfollowHandler = () => {
        let newUser = {
            ...viewingUser,
            following: viewingUser.following.filter(username => username !== subjectUser.username)
        }
        dispatch(updateProfileThunk(newUser))
    }
    const submitBioHandler = () => {
        let newUser = {
            ...subjectUser,
            bio: document.querySelector("#newBioText").value
        }
        dispatch(updateProfileThunk(newUser))
    }


    return (
        <div>
            <h1>Profile</h1>
            <div>
                <div className={"d-flex flex-row justify-content-between"}>
                    <h2>Here's {subjectUser.username}!</h2>
                    {(subjectUser.username !== viewingUser.username &&
                            viewingUser.type !== "ANON" &&
                            !viewingUser.following.includes(subjectUser.username)) &&
                        <button type="button" className="btn btn-primary" onClick={followHandler}>Follow</button>}
                    {(subjectUser.username !== viewingUser.username &&
                            viewingUser.type !== "ANON" &&
                            viewingUser.following.includes(subjectUser.username)) &&
                        <button type="button" className="btn btn-danger" onClick={unfollowHandler}>Unfollow</button>}
                </div>

                <hr/>
                <h4>{subjectUser.username}'s bio:</h4>
                <p>{subjectUser.bio}</p>
                {subjectUser.username === viewingUser.username && viewingUser.type !== "ANON" && (
                    <div className={"list-group-item d-flex flex-row justify-content-between"}>
                        <input className="form-control" id={"newBioText"}/>
                        <button type="button" className="btn btn-primary" onClick={submitBioHandler}>Submit new bio
                        </button>
                    </div>
                )}
            </div>
            <div>
                <hr/>
                {subjectUser.username === viewingUser.username ? (
                    <>
                        <h4>You are currently following:</h4>
                        <div className={"list-group"}>
                            {viewingUser.following.map(influencer => (
                                <div className={"list-group-item"}>
                                    <a href={`/profile/${influencer}`}>
                                        <span className={"fw-bold"}>{influencer}</span>
                                    </a>
                                </div>
                            ))}
                        </div>

                    </>
                ) : (
                    <div className={"list-group-item"}>
                        Followings are kept private.
                    </div>
                )}

            </div>
            <div>
                <hr/>
                <h4>{subjectUser.username}'s reviews:</h4>
                <div className={"list-group"}>
                    <ReviewsListUser username={subjectUser.username}/>
                </div>
            </div>

        </div>

    );
}
export default ProfileContent;