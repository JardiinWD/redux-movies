import React from 'react'
import './styles/MovieCard.scss'

const MovieCard = (props) => {
    // Take the data from props
    const { data } = props;
    return (
        /* card-item */
        <div className="card-item">
            {/* card-inner */}
            <div className="card-inner">
                {/* card-top */}
                <div className="card-top">
                    <img src={data.Poster} alt={data.Title} />
                </div>
                {/* card-bottom */}
                <div className="card-bottom">
                    {/* card-info */}
                    <div className="card-info">
                        <h4>{data.Title}</h4>
                        <p>{data.Year}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
