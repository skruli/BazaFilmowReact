import React, {Component} from "react";
import { Link } from "react-router-dom";
const axios = require('axios');

class LoginForm extends Component {

    state = {
        account: {
            username: "",
            password: ""
        },
        errors: {}
    };
 
    handleChangeRoute = () => {
        this.props.history.push('/');
        window.location.reload();
    };
 
    validate = () => {
        const errors = {};
 
        const {account} = this.state;
        if (account.username.trim() === '') {
            errors.username = 'Username is required!';
        }
        if (account.password.trim() === '') {
            errors.password = 'Password is required!';
        }
 
        return Object.keys(errors).length === 0 ? null : errors;
    };
 
    handleSubmit = (event) => {
        event.preventDefault();
 
        const errors = this.validate();
        this.setState({errors: errors || {}});
        if (errors) return;
 
        axios({
            method: 'post',
            url: 'https://pr-movies.herokuapp.com/api/user/auth',
            data: {
                login: this.state.account.username,
                password: this.state.account.password
            }
        }).then((response) => {
            localStorage.setItem('token', response.data.token);
           this.handleChangeRoute();
        }).catch((error) => {
            const errors = {};
            errors.password = 'Given username does\'t exists or password is wrong!';
            this.setState({errors: errors || {}});
            console.log(error);
        })
    };
 
    handleChange = (event) => {
        const account = {...this.state.account};
        account[event.currentTarget.name] = event.currentTarget.value;
        this.setState({account});
    };
  
    render() {
        return (
            <div className="card text-center shadow-sm mx-auto w-50 p-3 mb-2 mt-5 bg-light-lt rounded">
                <h1>Logowanie</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Login</label>
                        <input value={this.state.account.username}
                               name="username"
                               onChange={this.handleChange}
                               type="text"
                               className="form-control"
                               id="username"
                               placeholder="name"/>
                        {this.state.errors.username &&
                        <div className="alert alert-danger">{this.state.errors.username}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input value={this.state.account.password}
                               name="password"
                               onChange={this.handleChange}
                               type="password"
                               className="form-control"
                               id="password"
                               placeholder="Password"/>
                        {this.state.errors.password &&
                        <div className="alert alert-danger">{this.state.errors.password}</div>}
                    </div>
                    <button type="submit" className="btn btn-secondary mt-4 text-center">Zaloguj</button>
                    </form>
                   <p className="mt-3"> Nie masz konta? </p>
                    <Link to="/signup">
                        <button type="submit" className="btn btn-outline-secondary text-center">Rejestracja</button>
                    </Link>
               

           </div>
       );
   }
}

export default LoginForm;