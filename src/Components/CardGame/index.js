import React from 'react';
import './style.css';

export default function CardGame({ name, description, genre, date, img, showDetails }) {
    return (
        <div className="contCard" onClick={() => showDetails()}>

            <div className="contImg">
                <img src={img} />
            </div>

            <div className="contInfo">

                <h2>{name}</h2>
                <p>{description}</p>
                <p>{genre}</p>
                <span>{date}</span>

            </div>

        </div>
    );
}
