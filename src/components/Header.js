import React, { useState } from 'react'
import './styles/Header.scss'
import User from '../images/user.png'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../features/movies/movieSlice'



const Header = () => {

    // Text state for the search-bar. Initially as an empty string
    const [term, setTerm] = useState("")
    // Create the Dispatch variable
    const dispatch = useDispatch()

    // submitHandler Function
    const submitHandler = (event) => {
        // Prevent Refresh
        event.preventDefault()
        if (term === "") return
        // use the term as a param for the fetchAsyncMovies
        dispatch(fetchAsyncMovies(term))
        // use the term as a param for the fetchAsyncShows
        dispatch(fetchAsyncShows(term))
        // Clear of term field
        setTerm('')
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
