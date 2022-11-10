import React, { Fragment, useEffect } from 'react'
import './styles/Home.scss'
import MovieListing from '../components/MovieListing'
// Import Movie API
import movieApi from "../common/apis/movieApi"
import { APIKey } from '../common/apis/movieApiKey'
import { useDispatch } from 'react-redux'
import { addMovies } from '../features/movies/movieSlice'

const Home = () => {
    const movieText = "Harry"
    const dispatch = useDispatch()

    useEffect(() => {
        // Function that allowed me to fetch movies
        const fetchMovies = async () => {
            // Take the response from axios
            // &s=${movieText} => Movie title to search for
            // &type=movie` => Type of result to return (It can be a movie, serie etc)
            const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`).catch((error) => console.log(error))
            dispatch(addMovies(response.data))
            console.log(response);
        }
        fetchMovies()
    }, [])

    return (
        <Fragment>
            {/* banner-img */}
            <div className="banner-img"></div>
            <MovieListing />
        </Fragment>
    )
}

export default Home
