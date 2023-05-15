import SearchBar from "./searchBar";
import {useLocation} from "react-router";
import SearchResults from "./searchResults";

function SearchComponent() {
    const {pathname} = useLocation()
    const parts = pathname.split("/")
    return (
        <div>
            <h1>Search something</h1>
            <SearchBar/>
            {parts.length >= 3 && <SearchResults query={parts[2]}/>}
        </div>

    );
}

export default SearchComponent;