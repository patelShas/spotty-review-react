import {useState} from "react";
import {Link} from "react-router-dom";

const SearchBar = () => {
    const [query, setQuery] = useState("");
    const SearchTypeHandler = (event) => {
        setQuery(event.target.value)
    }
    return (<div className={"list-group-item d-flex flex-row justify-content-between"}>
        <input className="form-control" value={query} onChange={SearchTypeHandler}/>
        <Link to={`${query}`}>
            <input type="submit" value="Search" className="btn btn-primary"/>
        </Link>
    </div>)
}

export default SearchBar;