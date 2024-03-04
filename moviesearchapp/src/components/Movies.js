import React from 'react';
import { useGlobalContext } from '../context';
import { NavLink } from 'react-router-dom';

const Movies = () => {
    const { movie,isLoading } = useGlobalContext();
    if(isLoading){
        return(
            <div className="movie-section">
                <div className="loading">Loading.....</div>
            </div>
        )
    }
    return (
        <section className="movie-page">
            <div className="grid grid-4-col">
                {movie && movie.length > 0 ? (
                    movie.map((curMovie, index) => {
                        const title = curMovie.Title.substring(0, 15);
                        return (
                            <div key={index}>
                                <NavLink to={`movie/${curMovie.imdbID}`} key={curMovie.imdbID}>
                                    <h2>{title}</h2>
                                    <h3>{curMovie.Year}</h3>
                                    <p>{curMovie.Type}</p>
                                    <img src={curMovie.Poster} alt={curMovie.Title} />
                                </NavLink>
                            </div>
                        );
                    })
                ) : (
                    <div>No movies found</div>
                )}
            </div>
        </section>
    );
};

export default Movies;
