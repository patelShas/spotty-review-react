import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getProfileThunk, updateProfileThunk} from "../users/processing/user-thunks";
import ReviewsListUser from "../reviews/reviewsListUser";

function ProfileComponent() {
    const user = useSelector(state => state.user.user)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProfileThunk())
    }, [])
    const submitBioHandler = () => {
        let newUser = {
            ...user,
            bio: document.querySelector("#newBioText").value
        }
        dispatch(updateProfileThunk(newUser))
    }


    return (
        <div>
            <h1>Profile</h1>
            <div>
                <h2>Welcome back, {user.username}!</h2>
                <hr/>
                <p>{user.bio}</p>
                {user.username !== "Anon" && (
                    <div className={"list-group-item d-flex flex-row justify-content-between"}>
                        <input className="form-control" id={"newBioText"}/>
                        <button type="button" className="btn btn-primary" onClick={submitBioHandler}>Submit new bio</button>
                    </div>
                )}

            </div>
            <div>
                <hr/>
                <div className={"list-group"}>
                    You are currently following:
                    {user.following.map(influencer => (
                        <div className={"list-group-item"}>
                            {influencer}
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <hr/>
                <ReviewsListUser username={user.username}/>
            </div>
            <div>
                Exact requirements are:
                <ul>
                    <li>{"Must allow users to change their personal information. If a user is logged in then they can see their profile including sensitive information such as email and phone"}</li>
                    <li>{"Must be accessible to other users including anonymous users"}</li>
                    <li>{"Must hide personal/private information from others visiting the profile. If a user is visiting someone else's profile, then they can't see that other user's sensitive information"}</li>
                    <li>{"Must be mapped to \"/profile\" for displaying the profile of the currently logged in user"}</li>
                    <li>{"Must be mapped to \"/profile/{profileId}\" for displaying someone elses profile"}</li>
                    <li>{"Must group similar/related data into distinguishable groups, e.g., Following, Followers, Review, Favorites, etc."}</li>
                    <li>{"Must display lists of snippets and links of all data related to a user. For instance, display a list of links to all the favorite movies, list of links of users they are following, etc. For instance:"}</li>
                    <ul>
                        <li>{"If user is following other users, then those users must be listed in the profile and a link must navigate to that other users profile"}</li>
                        <li>{"If the user has bookmarked something, then it should be listed in the profile and a link must navigate to that something"}</li>
                        <li>{"If the user has commented, or reviewed, or created some content, then there must be a functionality to list a summary of that content and navigate to that content"}</li>
                        <li>{"You decide how to present, display, format the information"}</li>
                    </ul>
                    <li>
                        {"The profile page may be implemented as several pages\n"}
                    </li>
                </ul>
            </div>
        </div>

    );
}

export default ProfileComponent;