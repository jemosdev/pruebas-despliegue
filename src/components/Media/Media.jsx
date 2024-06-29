import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Media.css";

function Media({ src, alt }) {

    const style = {
        minWidth: "120px",
        minHeight: "120px"
    };
    //verify if src is defined and is a string before to call endsWith
    if (src && typeof src === "string") {
        if (src.endsWith('.jpg') || src.endsWith('.png') || src.endsWith('.svg')) {
            return (<img src={src} alt={alt} loading="lazy" style={style} />);
        }
        if (src.endsWith('.mp4') || src.endsWith('.webm')) {
            return (
                <video controls style={style}>
                    <source src={src} type={`video/${src.split('.').pop()}`} />
                </video>
            );
        }
    }
    //if src is not valid chain, return null
    return null;
}

export { Media };