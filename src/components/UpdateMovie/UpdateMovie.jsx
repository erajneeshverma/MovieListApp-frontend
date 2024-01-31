// UpdateMoviePage.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateMovie = () => {
  const { id } = useParams(); // Get the movie ID from the URL params
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    director: '',
    releaseyear: '',
    language: '',
    rating: ''
  });

  console.log(id);

  useEffect(() => {
    axios.get(`http://localhost:5000/movie/api/v1/movie/${id}`) 
      .then((response) => {
        console.log(response.data);
        setFormData(response.data.data)
    })
    .catch(error => console.error('Error, while fetching movie details:', error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleUpdateMovie = async () => {
    try {
      // Perform API call to update the movie
      const res = await axios.put(`http://localhost:5000/api/v1/movie/${id}`, formData); 
      if(res.ok){
        console.log("updateded Successfully")
        navigate('/allmovies');
      }else{

      }
    } catch (error) {
      console.error('Error updating movie:', error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Update Movie</h1>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="p-2 border border-gray-300 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="director">
            Director
          </label>
          <input
            type="text"
            id="director"
            name="director"
            value={formData.director}
            onChange={handleChange}
            className="p-2 border border-gray-300 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="releaseyear">
            Release Year
          </label>
          <input
            type="number"
            id="releaseyear"
            name="releaseyear"
            value={formData.releaseyear}
            onChange={handleChange}
            className="p-2 border border-gray-300 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="language">
            Language
          </label>
          <input
            type="text"
            id="language"
            name="language"
            value={formData.language}
            onChange={handleChange}
            className="p-2 border border-gray-300 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="rating">
            Rating
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="p-2 border border-gray-300 w-full"
          />
        </div>
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleUpdateMovie}
        >
          Update Movie
        </button>
      </form>
    </div>
  );
};

export default UpdateMovie;
