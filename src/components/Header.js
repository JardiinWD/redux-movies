import React, { useState } from 'react'
import './styles/Header.scss'
import User from '../images/user.png'
import { Link } from 'react-router-dom'



const Header = () => {

    // Text state for the search-bar
    const [term, setTerm] = useState("")

    // submitHandler Function
    const submitHandler = (event) => {
        event.preventDefault()
        console.log(term);
    }

    return (
        /* header */
        <div className="header">
            {/* logo */}
            <div className="logo">
                <Link to="/">Movie App</Link>
            </div>
            {/* search-bar */}
            <div className="search-bar">
                <form onSubmit={submitHandler}>
                    <input type="text" value={term} placeholder="Search Movies or Series..." onChange={(e) => setTerm(e.target.value)} />
                    {/* submit button */}
                    <button type='submit'>
                        {/* fa fa-search */}
                        <i className="fa fa-search"></i>
                    </button>
                </form>
            </div>
            {/* user-image */}
            <div className="user-image">
                <img src={User} alt="user" />
            </div>
        </div>
    )
}

export default Header
