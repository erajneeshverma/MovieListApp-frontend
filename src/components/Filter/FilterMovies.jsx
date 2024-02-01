// FilterMovies.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../AllMovies/MovieCard.jsx'; // Assuming you have a MovieCard component
import { BASE_URL } from '../Utils/Url.js';
const FilterMovies = () => {
  const [filterType, setFilterType] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [count,setCount] = useState(null);
  const handleFilter = () => {
    if(filterType==="numOfFilms"){
      axios.get(`${BASE_URL}/movie/countbylanguage?language=${filterValue}`) // Update the API endpoint
      .then((response) => {
        console.log(response);
        setFilteredMovies(response.data.data.result);
        setCount(response.data.data.count);
        console.log(count,filterValue);
      })
      .catch(error => console.error('Error filtering movies:', error));
    }else{
    axios.get(`${BASE_URL}/movie/filterby${filterType}?${filterType}=${filterValue}`) // Update the API endpoint
      .then((response) => {
        console.log(response);
        setFilteredMovies(response.data.data)
      })
      .catch(error => console.error('Error filtering movies:', error));
    }
  };

  useEffect(() => {
    // Fetch movies from your backend API
    axios.get(`${BASE_URL}/movie/movies`) 
    .then((response) => {
        console.log(response.data.data.movies);
        setFilteredMovies(response.data.data.movies);
    })
    .catch(error => console.error('Error fetching movies:', error));
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Filter Movies</h1>
      <div className="mb-4 flex">
        <select
          className="p-2 border border-gray-300 mr-2"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="">Select Filter</option>
          <option value="name">Name</option>
          <option value="director">Director</option>
          <option value="releaseYear">Release Year</option>
          <option value="language">Language</option>
          <option value="numOfFilms">Number of Films (Language)</option>
          <option value="rating">Rating</option>
        </select>
        <input
          type="text"
          placeholder="Enter filter value"
          className="p-2 border border-gray-300 mr-2"
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleFilter}
        >
          Filter
        </button>
      </div>
      
      {(filterType==="numOfFilms" &&  count!==null)?(<div>
        <p className='text-2xl font-bold mb-4'>No of {filterValue} language Movies are :  {count}</p>
      </div>):null}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredMovies.map(movie => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default FilterMovies;
