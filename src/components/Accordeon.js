import React from 'react'
import { useState } from 'react'
import ImgDown from '../assets/images/arrow.svg'


const Accordeon = ({ title, content, contentArray }) => {
    const [active, setActive] = useState(false); // on initie l'accordéon en le mettant en position fermée par défaut 
    
    const handleToggle = () => {
        setActive(!active)
    } // on active le toggle si la classe est différente de false (fermée), donc true
    
    return (
        // on met une condition : si la condition vaut true, l’élément juste après && sera affiché (la classe active)
        <div className={`accordeon ${active && 'active'}`}> 
            <div className='accordeon__title' onClick={handleToggle}>
                <p>{title}</p> 
               <img className='accordeon__arrow' src={ImgDown} alt='flêche bas'></img> 
            </div>
            <div className='accordeon__content'>{content}</div>
        </div>
    );
};

export default Accordeon