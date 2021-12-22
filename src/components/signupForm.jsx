import React, {Component} from "react";
import { Link } from "react-router-dom";

class SignupForm extends Component {

  
   render() {
       return (
           <div class="card text-center shadow-sm mx-auto w-50 p-3 mb-2 mt-5 bg-light-lt rounded">
               <h1>Rejestracja</h1>
               <form >
                   <div className="form-group">
                       <label htmlFor="username">Login</label>
                       <input 
                              name="login"
                              type="text"
                              className="form-control"
                              id="login"
                              aria-describedby="emailHelp"
                              placeholder="Login"/>
                    </div>
                    <div className="form-group">
                       <label htmlFor="username">Name</label>
                       <input 
                              name="name"
                              type="text"
                              className="form-control"
                              id="username"
                              aria-describedby="emailHelp"
                              placeholder="Name"/>
                    </div>
                    <div className="form-group">
                       <label htmlFor="email">email</label>
                       <input 
                              name="username"
                              type="email"
                              className="form-control"
                              id="email"
                              aria-describedby="emailHelp"
                              placeholder="jan.kowalski@gmail.com"/>
                    </div>
                   <div className="form-group">
                       <label htmlFor="Password">Password</label>
                       <input                                                                          name="password"
                              type="password"
                              className="form-control"
                              id="password"
                              placeholder="Password"/>
                    </div>                    
                    <button type="submit" className="btn btn-secondary mt-4 text-center">Zarejestruj</button>
               </form>

           </div>
       );
   }
}

export default SignupForm;