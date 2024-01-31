// MovieCard.js
import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const MovieCard = ({ movie}) => {
  const navigate = useNavigate();
  const { _id, title, director, releaseyear, language, rating } = movie;

  const handleDelteClick = () => {
      axios.delete(`http://localhost:5000/api/v1/movie/${_id}`)
      .then((res)=>{
        alert("Movie Deleted");
        window.location.reload(true);
      })
      .catch((err)=>{
        console.log("Something Went Wrong while deleting...");
      })
  }
  return (
    <div className="border p-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p><strong>Director:</strong> {director}</p>
      <p><strong>Release Year:</strong> {releaseyear}</p>
      <p><strong>Language:</strong> {language}</p>
      <p><strong>Rating:</strong> {rating}</p>
      <div className="flex justify-between mt-4">
        <Link to={`/update/${_id}`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Update</Link>
        <button onClick={handleDelteClick} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Delete</button>
      </div>
    </div>
  );
}

export default MovieCard;
