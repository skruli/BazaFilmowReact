import React from 'react'
import Search from './search';
import { Link } from "react-router-dom";
import { isExpired, decodeToken  } from "react-jwt";
const NavBar = () => {

  const user = decodeToken(localStorage.getItem('token'));
  const isNotLogged = isExpired(localStorage.getItem('token'));

  return (
<nav>
  <div className="navbar navbar-dark bg-dark">
    <div className="container-fluid">
      
      <Link to="/" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                         aria-controls="pills-home" aria-selected="true"><strong>Baza filmów</strong>
      </Link>
      {!isNotLogged && <Link to="/add" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                         aria-controls="pills-home" aria-selected="true"><button type="button" className="btn btn-secondary">Dodaj film [+]</button>
      </Link>}
      <Search/>
     
      {isNotLogged && <Link to="/login" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                         aria-controls="pills-home" aria-selected="true"><button type="button" className="btn btn-secondary">zaloguj się</button>
      </Link>}
      {user && <h5 className="text-light">Zalogowny na: {user.name}</h5>}
      {!isNotLogged && <a href="/" className="nav-link" id="pills-home-tab" data-toggle="pill" role="tab"
                                  aria-controls="pills-home" aria-selected="true" onClick={() => localStorage.removeItem('token')}>Wyloguj</a>}
    </div>
  </div>
</nav>
  )
}

export default NavBar