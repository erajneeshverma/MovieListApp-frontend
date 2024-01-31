import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider,createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import AllMovies from './components/AllMovies/AllMovies.jsx';
import Search from './components/Search/Search.jsx';
import FilterMovies from './components/Filter/FilterMovies.jsx';
import AddMoviePage from './components/AddMovie/AddMovie.jsx';
import UpdateMovie from './components/UpdateMovie/UpdateMovie.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="movies" element={<AllMovies />} />
      <Route path="search" element={<Search />} />
      <Route path="filter" element={<FilterMovies />} />
      <Route path="add" element={<AddMoviePage />} />
      <Route path="update/:id" element={<UpdateMovie />} />
      
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
