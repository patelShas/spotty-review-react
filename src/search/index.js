import React from "react";
import SearchComponent from "./searchComponent";

function SearchPage() {
    return(
        <div className="row mt-2">
            <div className="col-2 bg-success text-white">
                Wigma
            </div>
            <div className="col-8">
                <SearchComponent/>
            </div>
            <div className="col-2 bg-success text-white">
                Ligma
            </div>
        </div>

    );
}

export default SearchPage;