import React from "react";
import { Link } from "react-router-dom";
import MovieName from "./movieName";
import MovieRating from "./movieRating";
import MovieIMG from "./movieIMG"
const FilmCard = () => {
    return <div class="card shadow-sm m-3" style={{maxWidth:"20%", height:"auto",display:"flex"}}>
    <div class="card-body">
        <MovieName class="card-title"/>
        <MovieRating class="card-text"/>
    </div>
    <MovieIMG class="card-img-bottom"/>
    <Link to="/details" class="mt-2 mb-2">
    <button type="submit" className="btn btn-outline-secondary text-center">+</button>
    </Link>
  </div>
};

export default FilmCard;