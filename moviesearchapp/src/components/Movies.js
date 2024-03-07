import React from 'react';
import { useGlobalContext } from '../context';
import { NavLink } from 'react-router-dom';

const Movies = () => {
    const { movie, isLoading } = useGlobalContext();

    if (isLoading) {
        return (
            <div className="movie-section">
                <div className="loading">Loading.....</div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {movie && movie.length > 0 ? (
                movie.map((curMovie, index) => {
                    const title = curMovie.Title.substring(0, 30);
                    return (
                        <div key={index} className="bg-yellow-300 p-4 rounded-md">
                            <NavLink to={`movie/${curMovie.imdbID}`} key={curMovie.imdbID}>
                                <div className="border border-blue-800 hover:border-gray-300 p-2 rounded-md">
                                <img
    src={curMovie.Poster}
    alt={curMovie.Title}
    className="w-full h-auto rounded-md hover:shadow-lg hover:bg-yellow-300"
    style={{ maxWidth: '200px' }}
/>

                                    <div className="mt-2 text-center">
                                        <h2 className="text-2xl font-bold">{title}</h2>
                                        <div className="text-sm bg-black rounded-md p-1">
                                            <p>{curMovie.Year}</p>
                                            <p>{curMovie.Type.toUpperCase()}</p>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    );
                })
            ) : (
                <div>No movies found</div>
            )}
        </div>
    );
};

export default Movies;
