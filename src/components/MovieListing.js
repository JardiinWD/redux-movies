import React from 'react'
import MovieCard from './MovieCard'
// Import Slider Component
import Slider from 'react-slick'
import Settings from '../common/settings'
// Import useSelector 
import { useSelector } from 'react-redux'
// Import the getAllMovies fn
import { getAllMovies, getAllShows } from '../features/movies/movieSlice'
import './styles/MovieListing.scss'


const MovieListing = () => {

    // Setting object for the Slider Component


    // Get all the movies from the getAllMovies fn
    const movies = useSelector(getAllMovies)
    const shows = useSelector(getAllShows)
    // Create an empty variable for the renderMovies
    let renderMovies, renderShows = ""

    // Control if there is a response and save it into renderMovies variable
    renderMovies = movies.Response === "True" ? (
        // If it's true then use the Map method for filtering
        movies.Search.map((movie, index) => {
            return <MovieCard key={index} data={movie} />
        })
    ) : (
        // Else release an error
        <div className="movies-error">
            <h3>{movies.Error}</h3>
        </div>
    )

    // Control if there is a response and save it into renderMovies variable
    renderShows = shows.Response === "True" ? (
        // If it's true then use the Map method for filtering
        shows.Search.map((serie, index) => {
            return <MovieCard key={index} data={serie} />
        })
    ) : (
        // Else release an error
        <div className="shows-error">
            <h3>{shows.Error}</h3>
        </div>
    )

    return (
        /* movie-wrapper */
        <div className="movie-wrapper">
            {/* movie-list */}
            <div className="movie-list">
                <h2>Movies</h2>
                {/* movie-container */}
                <div className="movie-container">
                    <Slider {...Settings}>{renderMovies}</Slider>
                </div>
            </div>
            {/* show-list */}
            <div className="show-list">
                <h2>Shows</h2>
                {/* movie-container */}
                <div className="movie-container">
                    <Slider {...Settings}>{renderShows}</Slider>
                </div>
            </div>
        </div>
    )
}

export default MovieListing
