import React from "react";
import "./Guides.css";
import { Cards } from "../Cards/Cards";

function Guides({ searchValue, limitCard }) {

    return (
        <div className="guide-container p-4">
            <div className="bgTopLeft">
                <div className="bgBottomRight">
                    <div className="container py-2">
                        <div className="guide-text text-light text-center pb-2">
                            <h1>Guias <b>Tecnosuper</b></h1>
                        </div>

                        <div className="py-4" />

                        <Cards searchValue={searchValue} limitCard={limitCard} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Guides };