import './App.css';
import {Route, Switch, Redirect} from "react-router-dom";
import NavBar from './components/navbar';
import Home from './components/home';
import LoginForm from './components/loginForm';
import SignupForm from './components/signupForm';
import Details from './components/movieDetails';
import MovieAdd from './components/movieAdd';
import { isExpired } from "react-jwt";

    function App() {
      return (
        <div className="container-fluid">
        <NavBar />
        <div className="container">
            <div className="content">
            <Switch>               
                <Route path="/login" component={LoginForm} />
                <Route path="/signup" component={SignupForm} />
                <Route path="/details/:id" component={Details} />
                <Route path="/" exact component={Home} />
                <Route path="/add"
                      render={props => {
                          if (isExpired(localStorage.getItem('token'))) {
                              return <Redirect to="/" />;
                          }
                          return <MovieAdd />;
                      }}
                      />
                
            </Switch>
            </div>
        </div>
      </div>
 
      );
     }

export default App;
