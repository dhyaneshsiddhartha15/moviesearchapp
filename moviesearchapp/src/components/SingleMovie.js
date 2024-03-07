import React, { useEffect, useState } from "react";
import { useParams, NavLink } from 'react-router-dom';
import { API_URL } from "../context";

const SingleMovie = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState({});
    const [isError, setIsError] = useState(false);

    const getMovies = async (url) => {
        setIsLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if (data.Response === "True") {
                setIsLoading(false);
                setMovie(data);
            } else {
                setIsError(true);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            getMovies(`${API_URL}&i=${id}`);
        }, 900);

        return () => clearTimeout(timer);
    }, [id]);

    if (isLoading) {
        return (
            <div className="movie-section">
                <div className="loading">Loading..</div>
            </div>
        );
    }

    return (
        <div class="da relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50">
  <div class="absolute inset-0 bg-center dark:bg-black"></div>
  <div class="group relative m-0 flex h-100 w-100 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
    <div class="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
   
    <img src={movie.Poster}  className=" w-96 h-auto rounded-md animate-fade-in block  scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
    </div>
    <div class="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
    <p>{movie.Title}</p>
                <p>{movie.Released}</p>
                <p>{movie.Genre}</p>
                <p>{movie.imdbRating}</p>
                <p>{movie.Country}</p>
                
                <NavLink to="/" className="block w-full max-w-xs mx-auto mt-4 py-2 px-4 text-center bg-yellow-600 rounded-md text-white">Go Back</NavLink>
    </div>
  </div>
</div>
           
              
          
           
               
          
    );
};

export default SingleMovie;
