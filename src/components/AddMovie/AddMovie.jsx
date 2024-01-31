// AddMoviePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {BASE_URL} from '../Utils/Url.js';
const AddMoviePage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    director: '',
    releaseyear: '',
    language: '',
    rating: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleAddMovie = async () => {
    try {
      
        const res = await axios.post(`${BASE_URL}/movie/add`, formData);
    
        if(res.ok){
            console.log("Movie Added Succesfull",res);
        }
        navigate('/movies');
    } catch (error) {
      console.error('Error adding movie:', error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Add Movie</h1>
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
          onClick={handleAddMovie}
        >
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMoviePage;
