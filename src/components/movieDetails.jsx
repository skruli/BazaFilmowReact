import React, {useState} from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {

    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");
  
  fetch("https://pr-movies.herokuapp.com/api/movies/" + id)
          .then((res) => res.json())
          .then((json) => {
          setTitle(json.title);
          setImage(json.image);
          setContent(json.content);
  });

    return <div className="card-body">
            <h1>{title}</h1>
            <img style={{maxWidth:"14em",maxHeight:"14em"}} src={image} alt="..."/>
            <h2>Opis:</h2>
            <p>{content}</p>
    </div>
    
};

export default MovieDetails;