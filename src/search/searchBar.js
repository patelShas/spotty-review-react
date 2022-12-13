import {useState} from "react";
import {useLocation} from "react-router";

const SearchBar = () => {
    const {pathname} = useLocation()
    const root = pathname.split("/")[0]
    const [query, setQuery] = useState("");
    const SearchTypeHandler = (event) => {
        setQuery(event.target.value)
    }
    return (
        <div className={"list-group-item d-flex flex-row justify-content-between"}>
            <input className="form-control" value={query} onChange={SearchTypeHandler}/>
            <a href={`${root}/search/${query}`}>
                <input type="submit" value="Search" className="btn btn-primary"/>
            </a>
        </div>
    )
}

export default SearchBar;