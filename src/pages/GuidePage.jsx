import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSearchParams } from "react-router-dom";

import { Guides } from "../components/Guides/Guides.jsx";

function GuidePage() {
    
    let [searchParams] = useSearchParams();
    let q = searchParams.get("q");

    return (
        <div>
            <Guides
                searchValue={q}
            />
        </div>
    );
}

export { GuidePage };