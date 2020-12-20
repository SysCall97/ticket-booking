import React from 'react';
import { Link } from 'react-router-dom';

const ShowMovieCard = ({movie}) => {

    return (
        <div className="d-flex justify-content-around align-items-center mw-50 m-5 border rounded p-2">
            <h3 className="pl-5">{movie.movieName}</h3>
            <div className="pl-5">
                <h5>{movie.date}</h5>
                <p>{movie.startTime} - {movie.endTime}</p>
            </div>
            <Link to={`/book/${movie._id}`}>
                <button className="btn btn-primary">Book a seat</button>
            </Link>
        </div>
    );
};

export default ShowMovieCard;