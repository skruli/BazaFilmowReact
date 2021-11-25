import React from 'react'
import Search from './search';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
<nav>
  <div class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      
      <Link to="/" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                         aria-controls="pills-home" aria-selected="true"><strong>Baza filmów</strong>
      </Link>
      <Search/>
     
      <Link to="/login" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                         aria-controls="pills-home" aria-selected="true"><button type="button" class="btn btn-secondary">zaloguj się</button>
      </Link>
      
    </div>
  </div>
</nav>
  )
}

export default NavBar