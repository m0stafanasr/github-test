import React, { useState} from "react";
import { Link } from "react-router-dom";
import AxiosInstance from "./axiosconfig";
import Favorite from "./favorite";

const Navbar = ()=>{


return(
    <>
         <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><strong>the Movie Board</strong></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link active" to="/">Home
            <span className="visually-hidden">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/favorite">
          favorites</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
        </header>
    </>
)
}

export default Navbar;