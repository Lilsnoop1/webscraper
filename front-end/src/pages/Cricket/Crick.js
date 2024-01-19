import React from "react";
import CricketTeams from "../../data/cricketTeams.json"
import Content from "../../components/content";
function Crick(props){
    return(
        <div className="football-content">
            {CricketTeams.teams.map((team)=>{
                return <Content TeamName={team.name} currentFixture={team.versus} date={team.date}/>
        })}
        </div>
    )
}
export default Crick ;