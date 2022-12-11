import React from "react";
import SearchComponent from "./searchComponent";
import NavigationSidebar from "../navigation-sidebar";

function SearchPage() {
    return (
        <div className="container">
            <div className="row mt-2">
                <div className="col-auto col-lg-2">
                    <NavigationSidebar/>
                </div>
                <div className="col-10">
                    <SearchComponent/>
                </div>
            </div>
        </div>
    );
}

export default SearchPage;