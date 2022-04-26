import React from "react";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <section className="navbar">
      <div className="nav-logo">
        <ol>
          <a href="#homepage">Lamek Marouf</a>
        </ol>
      </div>
      <div className="nav-words">
        <ul>
          <Link to="/">Home</Link>
        </ul>
        <ul>
          <Link to="/about">About</Link>
        </ul>
        <ul>
          <Link to="/skills">Skills</Link>
        </ul>
        <ul>
          <Link to="/projects">Projects</Link>
        </ul>
        <ul>
          <Link to="/contact">Contact</Link>
        </ul>
      </div>
      <Outlet />
    </section>
  );
}

export default Navbar;
