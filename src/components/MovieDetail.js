import React, { useEffect, Fragment } from 'react'
import './styles/MovieDetail.scss'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncMovieOrShowDetail, getAllMovieOrShowDetail, removeSelectedMovieOrShow } from '../features/movies/movieSlice'


const MovieDetail = () => {
    // Take the imdbID from useParams
    const { imdbID } = useParams()
    // Create the dispatch variable
    const dispatch = useDispatch();
    // Take the data
    const data = useSelector(getAllMovieOrShowDetail)
    console.log(data);

    // Invoke the useEffect
    useEffect(() => {
        // Pass into the fetchAsyncMovieOrShowDetail the imdbID
        // Took from  useParams
        dispatch(fetchAsyncMovieOrShowDetail(imdbID))
        return () => {
            dispatch(removeSelectedMovieOrShow())
        }
    }, [dispatch, imdbID])

    return (
        /* movie-section */
        <div className="movie-section">
            {/* If there aren't films avaiable */}
            {Object.keys(data).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <Fragment>
                    {/* section-left */}
                    <div className="section-left">
                        {/* movie-title */}
                        <div className='movie-title'>{data.Title}</div>
                        {/* movie-rating */}
                        <div className="movie-rating">
                            {/* imdbRating */}
                            <span>IMDB Rating <i className="fa fa-star"></i> : {data.imdbRating}</span>
                            {/* imdbVotes */}
                            <span>IMDB Votes <i className="fa fa-thumbs-up"></i> : {data.imdbVotes}</span>
                            {/* Runtime */}
                            <span>Runtime <i className="fa fa-film"></i> : {data.Runtime}</span>
                            {/* Year */}
                            <span>Year <i className="fa fa-calendar"></i> : {data.Year}</span>
                        </div>
                        {/* movie-plot */}
                        <div className="movie-plot">{data.Plot}</div>
                        {/* Movie-info */}
                        <div className="movie-info">
                            {/* Director */}
                            <div>
                                <span>Director</span>
                                <span>{data.Director}</span>
                            </div>
                            {/* Actors */}
                            <div>
                                <span>Stars</span>
                                <span>{data.Actors}</span>
                            </div>
                            {/* Generes */}
                            <div>
                                <span>Generes</span>
                                <span>{data.Genre}</span>
                            </div>
                            {/* Languages */}
                            <div>
                                <span>Languages</span>
                                <span>{data.Language}</span>
                            </div>
                            {/* Awards */}
                            <div>
                                <span>Awards</span>
                                <span>{data.Awards}</span>
                            </div>
                        </div>
                    </div>
                    {/* section-right */}
                    <div className="section-right">
                        <img src={data.Poster} alt={data.Title} />
                    </div>
                </Fragment>
            )}
        </div>
    )
}

export default MovieDetail
