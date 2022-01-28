import React, {Component} from "react";
import axios from "axios";

class MovieAdd extends Component {

    state = {
        movie: {
            image: "",
            title: "",
            description: ""
        },
        errors: {}
    };

    handleChangeRoute = () => {
      this.props.history.push('/');
      window.location.reload();
  }; 

    validate = () => {
        const errors = {};
    
        const { movie } = this.state;
        if (movie.image === '') {
            errors.image = 'image link is required';
          }

        if (movie.title === '') {
          errors.title = 'title is required';
        }
    
        if (movie.description.trim() === '') {
          errors.description = 'description is required';
        }
    
        return Object.keys(errors).length === 0 ? null : errors;
      };

      handleSubmit = (event) => {
        event.preventDefault();
    
        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;
    
        axios({
          method: 'post',
          url: 'https://pr-movies.herokuapp.com/api/movies',
          data: {
            title: this.state.movie.title,
            image: this.state.movie.image,
            content: this.state.movie.description,
          },
        })
          .then((response) => {
            this.handleChangeRoute();
          })
          .catch((error) => {
            const errors = {};
            this.setState({ errors: errors || {} });
            console.log(error);
          });
      };

      handleChange = (event) => {
        const movie = { ...this.state.movie };
        movie[event.currentTarget.name] = event.currentTarget.value;
        this.setState({movie});
      };

   render() {
       return (
        <div className="card text-center shadow-sm mx-auto w-50 p-3 mb-2 mt-5 bg-light-lt rounded">
        <h1>Dodawanie filmu</h1>
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Nazwa filmu</label>
                <input value={this.state.movie.title}
                       name="title"
                       onChange={this.handleChange}
                       type="text"
                       className="form-control"
                       id="title"
                       placeholder="nazwa filmu"/>
                {this.state.errors.title &&
                <div className="alert alert-danger">{this.state.errors.title}</div>}
            </div>
            <div className="form-group">
                <label htmlFor="description">Opis filmu</label>
                <input value={this.state.movie.description}
                       name="description"
                       onChange={this.handleChange}
                       type="text"
                       className="form-control"
                       id="description"
                       placeholder="description"/>
                {this.state.errors.description &&
                <div className="alert alert-danger">{this.state.errors.description}</div>}
            </div>
            <div className="form-group">
                <label htmlFor="image">zdjęcie</label>
                <input value={this.state.movie.image}
                       name="image"
                       onChange={this.handleChange}
                       type="text"
                       className="form-control"
                       id="image"
                       placeholder="image"/>
                {this.state.errors.image &&
                <div className="alert alert-danger">{this.state.errors.image}</div>}
            </div>
            <button type="submit" className="btn btn-secondary mt-4 text-center">Dodaj film</button>
            </form>
            </div>
       );
   }
}

export default MovieAdd;