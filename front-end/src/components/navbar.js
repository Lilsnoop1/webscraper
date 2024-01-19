import React from "react";
import {Link, NavLink} from "react-router-dom";

function Navbar(){
    return(
        <div className="navbar">
            <p className="nav-title">WebScraper</p>
            <NavLink className="nav-link" to="/football">Football</NavLink>
            <NavLink className="nav-link" to="/cricket">Cricket</NavLink>
            <NavLink className="nav-link">TED Talks</NavLink>
            <NavLink className="nav-link">Hackathons</NavLink>
            <NavLink className="nav-link"><em>World Programming Competitions</em></NavLink>
        </div>
    )
}

export default Navbar;