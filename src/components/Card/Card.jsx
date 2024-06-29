import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";


function Card({ card }) {
    const { ID, description, details } = card;

    
    function parseDescription(txt) {
        
        //object to map each character accented to its version without accented
        const accentsMap = {
            'á': 'a',
            'é': 'e',
            'í': 'i',
            'ó': 'o',
            'ú': 'u',
            'Á': 'A',
            'É': 'E',
            'Í': 'I',
            'Ó': 'O',
            'Ú': 'U',
            'ñ': 'n',
            'Ñ': 'N'
        };

        // Replace accented chars with plain counterparts
        const slug = txt.split('').map(char => accentsMap[char] || char).join('');

        // Replace spaces with hyphens, convert to lowercase, and remove invalid chars
        return slug
            .replace(/ /g, '-')         // Replace spaces with hyphens
            .toLowerCase()              // Convert to lowercase
            .replace(/[^a-z0-9-]/g, '') // Remove invalid chars
            .replace(/-+/g, '-');       // Replace multiple hyphens with a single hyphen
    }

    return (
        <div className="card-bis_skin_checked">
            <div className="card-body text-center rounded-4 d-flex flex-column p-2 align-items-stretch">
                <div className="py-2 d-flex flex-column justify-content-center">
                    <h4 className="card-text text-light pb-1">{description}</h4>
                    {/* convert text or string to html tag */}
                    <div className="card-title text-light" dangerouslySetInnerHTML={{ __html: details }} />
                </div>
                <Link to={`/guides/${parseDescription(description)}/id/${ID}`} className="btn mt-auto btn-outline fw-bold">Uso de la plataforma</Link>
            </div>
        </div>
    );
}

export { Card };