import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {searchThunk} from "./processing/search-thunk";


const SearchResults = (
    {
        query = "generic"
    },
) => {
    const searchData = useSelector(state => state.searchResults)
    const status = searchData.loading
    const albums = searchData.results
    console.log(albums)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(searchThunk(query))
    }, [query, dispatch])


    return (
        <div className={"p-3 list-group"}>
            {query}
        </div>
    );

}

export default SearchResults;