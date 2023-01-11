import React from 'react';
import { Link } from 'react-router-dom';
import ImgError from '../assets/images/404.png';


const Error = () => {
    return (
        <div className='error'>
            <div className='error__title'>
                <img src={ImgError} alt='erreur 404' />
            </div>
            <p className='error__subtitle'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/' className='error__text'>Retourner sur la page d'accueil.</Link>
        </div>
    )
}

export default Error