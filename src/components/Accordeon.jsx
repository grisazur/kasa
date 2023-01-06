import React from 'react'
import { useState } from 'react'
import ImgDown from '../assets/images/arrow-down.svg'
import ImgTop from '../assets/images/arrow-top.svg'


{/* on doit renvoyer le titre, et 2 types de contenu : du texte simple (page about) et du texte en tableau (page logement) */}
const Accordeon = ({ title, content, contentArray }) => {
    {/* on initie l'accordéon en le mettant en position fermée par défaut */}
    const [isActive, setIsActive] = useState(false);  
    
    {/* si la condition setIsActive est fausse = accordéon affiche content et flêche vers le haut, si setIsActive est true = accordéon fermé */}
    return isActive ? (
        <div className='accordeon__container'>
            <div className='accordeon__header'>
                <p className='accordeon__header__title' key='id'>{title}</p> 
                <img className='accordeon__arrow' 
                    src={ImgTop} 
                    alt='flêche haut' 
                    onClick={() => setIsActive(false)}>
                </img>
            </div>
            {contentArray ? (
                <div className='accordeon__content' key='id'>
                    {contentArray.map((content, id) => (
                        <p className="accordeon__content__array" key={id}>
                            {content}
                        </p>
                    ))}
                </div>
                ) : (
                    <p className='accordeon__content__txt'>{content}</p>
                )}
        </div>
        ) : (
        <div className='accordeon__container'> 
            <div className='accordeon__header'>
                <p className='accordeon__header__title' key='id'>{title}</p> 
                <img className='accordeon__arrow' 
                    src={ImgDown} 
                    alt='flêche bas' 
                    onClick={() => setIsActive(true)}>
                </img>
            </div>
        </div>
        )
};

export default Accordeon