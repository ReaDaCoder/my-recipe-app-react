import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/App.css";
import { useNavigate, Link} from 'react-router-dom';


export default function HomePage(){
    return(
        <div className="homepage">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img src="recipe-log.PNG" width="45"/>
  <Link className="navbar-brand" to="#">Recipe Nest</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="#">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/AddRecipePage">Link</Link>
      </li>
    </ul>
    <ul>
    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Admin
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="#">Profile</Link>
          <Link className="dropdown-item" to="#">Another action</Link>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item" to="#">Logout</Link>
        </div>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
<h2>Recent Recipe</h2>
<div className="cnol">
      2 of 2
    </div>
<button><Link className="nav-link" to="./AddRecipePage">Add Recipe</Link></button>
<div classNane="container text-center css">
  <div className="row bg-red">
    <div className="col">
      <img src="" />
      <div className="name">Pizza Recipe</div>
    </div>
    <div className="col">
    </div>
    <div className="col">
    </div>
    <div className="col">
      2 of 2
    </div>
  </div>
</div>
</div>
    );
}