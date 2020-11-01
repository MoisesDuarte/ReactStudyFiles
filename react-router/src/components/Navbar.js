import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
  // setTimeout(() => {
  //   props.history.push('/about');
  // }, 2000);
  return (
    <nav className="nav-wrapper indigo darken-3 z-depth-1">
      <Link to="/" className="brand-logo ml-2">ReactRouter</Link>
      <ul className="right">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  )
}

// Wrapping Navbar with withRouter higher order component
export default withRouter(Navbar);