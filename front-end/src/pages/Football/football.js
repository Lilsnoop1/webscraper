import React from "react";
import Content from "../../components/content";
import { NavLink, Outlet } from "react-router-dom";
import SubNav from "../../components/sub-nav";
// import { useEffect, useState } from "react";


function Football(){
    // const [footballData,setFootball] = useState(null);
    // useEffect(()=>{
    //     const fetchFootballData= async ()=>{
    //         const response = await fetch('/sports/Football');
    //         const json = await response.json();

    //         if(response.ok){
    //             setFootball(json);
    //         }
    //     }
    //     fetchFootballData();
    // },[])
    const Links =["/football/pl","/football/laliga","/football/bundesliga","/football/seriea","/football/ligue","/football/saudi","/football/mexican","/football/mls","/football/scottish","/football/portugese"]
    const LN = ["Premier League","La Liga","Bundesliga","Serie A","Ligue","Saudi Pro League","Mexican","MLS","Scottish League","Portugese League"];
    return(
        <div className="football-content">
        <SubNav links={Links} leagueName={LN} />
        <Outlet/>
        </div>
    )
}

export default Football;  