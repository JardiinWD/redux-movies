import React, { Fragment, useEffect } from 'react'
import './styles/Home.scss'
import MovieListing from '../components/MovieListing'
import { useDispatch } from 'react-redux'
import { addMovies, fetchAsyncMovies, fetchAsyncShows } from '../features/movies/movieSlice'

const Home = () => {
    // Import the useDispatch fn into the dispatch variable
    const dispatch = useDispatch()

    // Invoke the useEffect fn for the fetchAsyncMovies
    useEffect(() => {
        // Invoke the fetchAsyncMovies 
        dispatch(fetchAsyncMovies())
        // Invoke the fetchAsyncMovies 
        dispatch(fetchAsyncShows())
        // use the dispatch as a dependency
    }, [dispatch])

    return (
        <Fragment>
            {/* banner-img */}
            <div className="banner-img"></div>
            <MovieListing />
        </Fragment>
    )
}

export default Home
