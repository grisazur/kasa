import React from 'react'
import '../datas/logements.json'


const Card = ({ cover, title }) => {
    return (
        <article className='card__item'>
            <img src={cover} alt="photo logement" />
            <div className='card__item__title'>
                 <p>{title}</p>
            </div>
        </article>
    )
}

export default Card