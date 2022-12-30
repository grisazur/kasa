import React from 'react'
import { NavLink } from 'react-router-dom'
import Img from '../assets/LOGO-header.svg'


const Header = () => {
    return (
        <div className='header'>
            <img className='header-logo' src={Img} alt='logo Kasa'></img>
            <ul>
                <NavLink to='/' className={(nav) => (nav.isActive ? 'nav-active' : '')}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to='/about' className={(nav) => (nav.isActive ? 'nav-active' : '')}>
                    <li>A propos</li>
                </NavLink>
            </ul>
        </div>
    )
}

export default Header