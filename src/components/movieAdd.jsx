import React, {Component} from "react";


class MovieAdd extends Component {

  
   render() {
       return (
           <div class="card text-center shadow-sm mx-auto w-75 p-3 mb-2 mt-5 bg-light-lt rounded">
               <h1>Dodaj film</h1>
               <form >
                   <div className="form-group">
                       <label htmlFor="username">Nazwa filmu</label>
                       <input 
                              name="moviename"
                              type="text"
                              className="form-control"
                              id="movieName"
                              aria-describedby="emailHelp"
                              placeholder="Nazwa filmu"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Opis filmu</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="input-group mb-3 mt-5">
                        <input type="file" class="form-control" id="inputGroupFile02"/>
                        <label class="input-group-text" for="inputGroupFile02">Dodaj zdjęcie</label>
                    </div>
                    <button type="submit" className="btn btn-secondary mt-4 text-center">Dodaj film</button>
               </form>

           </div>
       );
   }
}

export default MovieAdd;