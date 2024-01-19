import React from "react";
import teamData from "../../data/soccerTeams.json"
import Content from "../../components/content";
function Pl(props){
    return(
        <div className="football-content">
            {teamData[props.Name].map((object)=>{
                return(
                    <Content TeamName={object.name} imageURL={object.img}/>
                )
            })}
        </div>
    )
}
export default Pl;