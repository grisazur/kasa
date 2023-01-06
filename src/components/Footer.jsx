import React from 'react'
import Img from '../assets/images/LOGO-footer.svg'


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__logo'>
                <img src={Img} alt='logo Kasa'></img>
            </div>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer