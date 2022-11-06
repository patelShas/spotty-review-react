
function ProfilePage() {
    return(
        <div>
            <h1>Profile</h1>
            <div>
                <p>
                    Some public details
                </p>
            </div>
            <div>
                <p>
                    Some private details visible only if the viewer is logged in as this user
                </p>
            </div>
            <div>
                <p>
                    We would have a list of posts, each linking to a dedicated details page.
                </p>
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

export default ProfilePage;