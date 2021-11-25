import React from "react";
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
  </div>
};

export default FilmCard;