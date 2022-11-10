import React from 'react'
import './styles/Header.scss'
import User from '../images/user.png'
import { Link } from 'react-router-dom'



const Header = () => {
    return (
        /* header */
        <div className="header">
            <Link to="/">
                {/* logo */}
                <div className="logo">Movie App</div>
            </Link>
            {/* user-image */}
            <div className="user-image">
                <img src={User} alt="user" />
            </div>
        </div>
    )
}

export default Header
