import React from "react";
import MovieName from "./movieName";
import MovieRating from "./movieRating";
import MovieIMG from "./movieIMG"

const MovieDetails = () => {
    return <div class="card-body" style={{maxHeight:"50em",display:"flex"}}>
            <MovieName class="card-title"/>
            <MovieIMG />
            <h1>Opis:</h1>
            <p>Lorem Ipsum is simply dummy text of the printing
                 and typesetting industry. 
                 Lorem Ipsum has been the industry's 
                 standard dummy text ever since the 1500s, 
                 when an unknown printer took a galley of 
                 type and scrambled it to make a type specimen 
                 book. It has survived not only five centuries, 
                 but also the leap into electronic typesetting, 
                 remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                 <MovieRating class="card-text"/>

    </div>
    
};

export default MovieDetails;