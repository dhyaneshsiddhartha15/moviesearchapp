import React from 'react';
import { useGlobalContext } from '../context';

const Movies = () => {
    const {movie}=useGlobalContext();
    return (
        <div>
            {movie && movie.length > 0 ? (
                movie.map((curMovie, index) => (
                    <div key={index}>
                        <h2>{curMovie.Title}</h2>
                        <h3>{curMovie.Year}</h3>
                        
                        <p>{curMovie.Type}</p>
                        <img src={curMovie.Poster}/>

                    </div>
                ))
            ) : (
                <div>No movies found</div>
            )}
        </div>
    );
};

export default Movies;
