import React from "react";

function Navbar() {
    return (
        <section className="navbar">
        <div className="nav-logo">
            <ol><a href="#home-link">Lamek Marouf</a></ol>
        </div>
        <div className="nav-words">
            <ul><a href="#home-link">Home</a></ul>
            <ul><a href="#about-link">About</a></ul>
            <ul><a href="#skills-link">Skills</a></ul>
            <ul><a href="#projects-link">Projects</a></ul>
            <ul><a href="#socials-link">Socials</a></ul>
        </div>
    </section>

    )
}

export default Navbar;