import {Link} from "react-router-dom";

function HomePage() {
    return(
        <div>
            <h1>Hello World!</h1>
            <Link to="../components/Dashboard">Search Page</Link> |
            <Link to="/profile">Profile Page</Link>
            <div>
                <p>
                    Here we would place "Anonymous content"
                </p>
            </div>
            <div>
                <p>
                    And some "logged in content"
                </p>
            </div>
            <div>
                Exact requirements are:
                <ul>
                    <li>Must be mapped to either the root context ("/") or ("/home").</li>
                    <li>Must be the first page when visiting the website</li>
                    <li>Must display generic content for anonymous users. The content must be dynamic based on the latest data. For instance, you might display snippets and links to the most recent post, review, or member who recently joined</li>
                    <li>Must display specific content for the logged in user. The content must be dynamic based on the most recent data entered by the logged in user. For instance, you might display snippets and links to the most recent post or review created by the logged in user</li>
                    <li>Must be clear to what the Web site is about and must look polished and finished</li>
                </ul>
            </div>
        </div>

    );
}

export default HomePage;