import React from 'react'
import { useState } from 'react'
import ImgDown from '../assets/images/arrow-down.svg'
import ImgTop from '../assets/images/arrow-top.svg'


{/* on doit renvoyer le titre, et 2 types de contenu : du texte simple (page about) et du texte en tableau (page logement) */}
const Accordeon = ({ title, content, contentArray }) => {
    
    {/* on initie l'accordéon en le mettant en position fermée par défaut */}
    const [isActive, setIsActive] = useState(false);  
    
    {/* si la condition isActive est true = accordéon affiche content et flèche vers le haut, si isActive est false = accordéon fermé (puisque initialisé sur false) */}
    return isActive ? (

        <div className='accordeon__container'>

            <div className='accordeon__header'>
                <p className='accordeon__header__title' key='id'>{title}</p> 
                <img className='accordeon__header__arrow' src={ImgTop} alt='flêche haut' onClick={() => setIsActive(false)} />
            </div>

            {contentArray ? (
            <div className='accordeon__content' key='id'>
                {contentArray.map((content, id) => (
                <p className="accordeon__content__array" key={id}> {content} </p>
                ))}
            </div>
            ) : (
            <p className='accordeon__content__txt'> {content} </p>
            )}
        </div>
        ) : (
        <div className='accordeon__container'> 
            <div className='accordeon__header'>
                <p className='accordeon__header__title' key='id'>{title}</p> 
                <img className='accordeon__header__arrow' src={ImgDown} alt='flêche bas' onClick={() => setIsActive(true)} />            
            </div>
        </div>
        )
}

export default Accordeon