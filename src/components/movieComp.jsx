import React from "react";
import { Link } from "react-router-dom";
import MovieName from "./movieName";
import MovieIMG from "./movieIMG"

const FilmCard = (props) => {

  const link = "/details/" + props.id;

    return <div className="card shadow-sm m-3" style={{maxWidth:"20%", height:"auto",display:"flex"}}>
    <div className="card-body">
        <MovieName title={props.title} className="card-title"/>
    </div>
    <MovieIMG image={props.image} className="card-img-bottom"/>
    <Link to={link} className="mt-2 mb-2">
    <button type="submit" className="btn btn-outline-secondary text-center">+</button>
    </Link>
  </div>
};

export default FilmCard;