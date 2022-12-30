import React from 'react'
import '../styles/index.scss'
import '../datas/logements.json'


function Card({ cover, title }) {
    return (
        <article className="card-item">
            <img src={cover} alt="photo logement" />
            <div className="card-item_title">
                 <p>{title}</p>
            </div>
        </article>
    )
}

export default Card;