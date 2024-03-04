import React, {  useEffect, useState } from "react";
import { useParams,NavLink } from 'react-router-dom';
import {API_URL} from "../context"

const SingleMovie = () => {
    const {id} =useParams();
    const [isLoading, setIsLoading,setIsError] = useState(true);
    const [movie, setMovie] = useState([]);
    

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
                setIsError({
                    show: true,
                    msg: data.Error,
                });
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
if(isLoading){
    return(
        <div className="movie-section">
            <div className="loading">Loading..</div>
        </div>
    )
}
    return (
        <section className="movie-section">
            <div className="movie-card">
                <img src={movie.Poster} alt=""/>
            </div>
            <div className="card-content">
                <p>{movie.Title}</p>
                <p>{movie.Released}</p>
                <p>{movie.Genre}</p>
                <p>{movie.imdbRating}</p>
                <p>{movie.Country}</p>
                <NavLink to="/">Go Back</NavLink>
            </div>
            </section>
    );
};

export default SingleMovie;