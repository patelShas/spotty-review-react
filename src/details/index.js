import React from "react";
import DetailsComponent from "./detailsComponent";

function DetailsPage() {
    return (
        <div className="row mt-2">
            <div className="col-2 bg-success text-white">
                Wigma
            </div>
            <div className="col-8">
                <DetailsComponent/>
            </div>
            <div className="col-2 bg-success text-white">
                Ligma
            </div>
        </div>

    );
}

export default DetailsPage;