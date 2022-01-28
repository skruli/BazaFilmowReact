import React, {Component} from "react";
import MovieComp from './movieComp'

class Home extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
          movies: []
        };
      }

    componentDidMount() {
        fetch("https://pr-movies.herokuapp.com/api/movies")
          .then((res) => res.json())
          .then((json) => {
            this.setState({
              movies: json
            });
          });
      }

    render() {
        const { movies } = this.state;
        
        return (
            <div className="container-fluid">
                <div className="row">
                {movies.map((movie) => (
                    <MovieComp title={movie.title} image={movie.image} id={movie.id} key={movie.id} />
                ))}
                </div>
            </div> 
        );
}}


 export default Home;