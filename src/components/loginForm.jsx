import React, {Component} from "react";
import { Link } from "react-router-dom";

class LoginForm extends Component {

  
   render() {
       return (
           <div class="card text-center shadow-sm mx-auto w-50 p-3 mb-2 mt-5 bg-light-lt rounded">
               <h1>Logowanie</h1>
               <form >
                   <div className="form-group">
                       <label htmlFor="username">Login</label>
                       <input 
                              name="username"
                              type="text"
                              className="form-control"
                              id="username"
                              aria-describedby="emailHelp"
                              placeholder="Username"/>
                                          </div>
                   <div className="form-group">
                       <label htmlFor="Password">Password</label>
                       <input                                                                          name="password"
                                                            type="password"
                              className="form-control"
                              id="password"
                              placeholder="Password"/>
                                          </div>
                   <button type="submit" className="btn btn-secondary mt-4 text-center">Zaloguj</button>
                   <p class="mt-3"> Nie masz konta? </p>
                    <Link to="/signup">
                        <button type="submit" className="btn btn-outline-secondary text-center">Rejestracja</button>
                    </Link>
               </form>

           </div>
       );
   }
}

export default LoginForm;