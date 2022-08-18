import React from 'react';
import { NavLink } from 'react-router-dom';
import './CSS/List.css';

function List() {
  return (
    <header className="nav-header">
      <h1>Math Magicians</h1>
      <nav className="nav-bar">
        <div className="nav-conatiner">
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/calculator">Calculator</NavLink>
          <NavLink className="nav-link" to="/quotes">Quote</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default List;
