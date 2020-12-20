import React, { useEffect, useState } from 'react';
import ShowMovieCard from './ShowMovieCard';

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/getAllMovies')
        .then(res=>res.json())
        .then(data => setMovies(data));
    }, []);
    return (
        <div>
            {
                movies.map(movie => <ShowMovieCard movie={movie} key={movie._id} />)
            }
        </div>
    );
};

export default Movies;