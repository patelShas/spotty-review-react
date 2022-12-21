import SearchBar from "./searchBar";
import {useLocation} from "react-router";
import SearchResults from "./searchResults";

function SearchComponent() {
    const {pathname} = useLocation()
    const parts = pathname.split("/")
    return(
        <div>
            <h1>Search something</h1>
            <div>
                <p>
                    We would have a list of posts, each linking to a dedicated details page.
                </p>
            </div>
            <SearchBar/>
            {parts.length >= 3 && <SearchResults query={parts[2]}/>}
        </div>

    );
}
export default SearchComponent;