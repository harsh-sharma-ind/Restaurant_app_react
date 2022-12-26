import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'


export const Navbar = () => {
    return (
        <header>
            <Link to={'/'}><img className='logo' src="../assets/restaurant_48px.svg" alt=''/></Link>
        

            <p>Food's Restaurant</p>
    </header>
    )
}