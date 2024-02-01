// AllMoviesPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard.jsx'; // Assuming you have a MovieCard component
import { BASE_URL } from '../Utils/Url.js';
import LoadingComponent from '../Loader/LoadingComponent.jsx';


const AllMoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // Fetch movies from your backend API
    axios.get(`${BASE_URL}/movie/movies`) 
    .then((response) => {
        console.log(response.data.data.movies);
        setMovies(response.data.data.movies);
        setLoading(false);
    })
    .catch(error => console.error('Error fetching movies:', error));
  }, []);

  
  return (
    <>
      { loading ? (<LoadingComponent />)  : 
      (<div className="container mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">All Movies</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies.map(movie => (
            <MovieCard  key={movie._id} movie={movie} />
          ))}
        </div>
      </div>)
    }
    </>
  );
}

export default AllMoviesPage;
