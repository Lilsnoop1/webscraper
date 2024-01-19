import React from "react";
import { NavLink } from "react-router-dom";

function SubNav(props){
    return <nav className="league-bar">
            {props.links.map((link,index)=>{
                return <NavLink to={link} className="nav-link">{props.leagueName[index]}</NavLink>
            })}
    </nav>
}

export default SubNav;