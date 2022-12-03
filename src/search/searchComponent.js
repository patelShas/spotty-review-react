function SearchComponent() {
    return(
        <div>
            <h1>Search something</h1>
            <div>
                <p>
                    We would have a list of posts, each linking to a dedicated details page.
                </p>
            </div>
            <div>
                Exact requirements are:
                <ul>
                    <li>{"Must provide a form to search a remote API, not your own API"}</li>
                    <li>{"Must provide a summarized list of results matching the search criteria. Results must come from the remote API, not your local database"}</li>
                    <li>{"Must provide a link/button to navigate to the details page (see below)"}</li>
                    <li>{"Must be mapped to /search when no search has been executed and no results exist"}</li>
                    <li>{"Must be mapped to /search/{search criteria} or /search?criteria={search criteria} when a search has been executed and according results shown"}</li>
                    <li>{"Can augment the results with related data in your local databases"}</li>
                    <li>{"The search and results page can be implemented as either a single page or separate pages. In that case a separate route can be used such as /results/{search criteria} or /results?criteria={search criteria}"}</li>
                </ul>
            </div>
        </div>

    );
}
export default SearchComponent;