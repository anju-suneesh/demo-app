import React from "react";
import { Link } from 'react-router-dom';

function Header() {
    return (
    <navbar className="navbar bg-dark">
      <h1>
        <Link to="/">DX Client Management</Link>
      </h1>
      <ul>
        <li><Link to="/">Home </Link></li>
        <li><Link to="/clients">Clients</Link></li>
        <li><Link to="/contactus">About</Link></li>
      </ul>
    </navbar>
    );
  }
  
  export default Header;