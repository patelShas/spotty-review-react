import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {searchThunk} from "./processing/search-thunk";


const SearchResults = (
    {
        query = "generic"
    },
) => {
    const searchData = useSelector(state => state.searchResults)
    const status = searchData.searchStatus
    const albums = searchData.results
    console.log(albums)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(searchThunk(query))
    }, [query, dispatch])


    return (
        <div className={"p-3 list-group"}>
            {status === 0 && <div className={"list-group-item"}>
                Loading...
            </div>}
            {status === 1 && albums.map(album => (
                <div className={"list-group-item d-flex flex-row justify-content-between"}>
                    <a href={`/details/${album.id}`}>{album.name}</a>
                    <img src={album.images[0].url} alt={`${album.name} cover`} className={"rounded"} width={"50"}
                         height={"50"}></img>
                </div>
            ))}
            {((status === -1) || (status === 1 && albums.length === 0) )&& <div className={"list-group-item"}>
                Sorry, No results found.
            </div>}
        </div>
    );

}

export default SearchResults;