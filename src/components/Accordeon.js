import React from 'react'
import { useState } from 'react'
import ImgDown from '../assets/images/arrow.svg'


const Accordeon = ({ title, content }) => {
    const [active, setActive] = useState(false) // on initie l'accordéon en le mettant en position fermée par défaut 
    
    const handleToggle = () => {
        setActive(!active)
    } // on active le toggle si la classe est différente de false
    
    return (
        <div className={`accordeon ${active && 'active'}`}>
            <div className='accordeon__title' onClick={handleToggle}>
                <h1>{title}</h1> 
               <img className='accordeon__arrow' src={ImgDown} alt='flêche bas'></img> 
            </div>
            <div className='accordeon__content'>{content}</div>
        </div>
    );
};

export default Accordeon