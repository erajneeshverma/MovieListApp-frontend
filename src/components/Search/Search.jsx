// SearchMovies.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../AllMovies/MovieCard.jsx'; // Assuming you have a MovieCard component
import { BASE_URL } from '../Utils/Url.js';
import LoadingComponent from '../Loader/LoadingComponent.jsx'
const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading,setLoading] = useState(true);
  
  useEffect(() => {
    // Fetch movies from your backend API
    axios.get(`${BASE_URL}/movie/movies`) 
    .then((response) => {
        console.log(response.data.data.movies);
        setSearchResults(response.data.data.movies);
        setLoading(false);
    })
    .catch(error => console.error('Error fetching movies:', error));
  }, []);

  const handleSearch = () => {
    setLoading(true);
    // Fetch movies based on the title from your backend API
    axios.get(`${BASE_URL}/movie/search?q=${searchQuery}`) 
      .then((response) => {
        console.log(response)
        setSearchResults(response.data.data)
        setLoading(false);
      })
      .catch(error => console.error('Error searching movies:', error));
  };

  return (
    <>
      {loading ? (<LoadingComponent />): (<div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Search Movies</h1>
      <div className="mb-4 flex">
        <input
          type="text"
          placeholder="Enter movie title"
          className="p-2 border border-gray-300 mr-2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {searchResults.map(movie => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>)}
    </>
  );
}

export default Search;
