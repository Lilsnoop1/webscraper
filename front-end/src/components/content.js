import React,{useState,useEffect} from "react";
import BookmarkWhite from "../images/bookmark-white.png"
import BookmarkYellow from "../images/bookmark.png"
function Content(props){
    const [bookmark,setbookmark]= useState(BookmarkWhite);
    const [teaMName,setTeamName] = useState("");
    const [clubUrl,setClubUrl] = useState("");
    async function handleClick(event){
        event.preventDefault();
        if(bookmark!==BookmarkWhite){
            setbookmark(BookmarkWhite)

        }else if(bookmark===BookmarkWhite){
            setbookmark(BookmarkYellow)
            
            setTeamName(event.target.firstChild.childNodes[3].name);
            setClubUrl(event.target.firstChild.childNodes[0].currentSrc);
            // const urltoStore = ev
            console.log(event);
            const teamss = {teamName:[teaMName],imgURL:[clubUrl]};
            const response = await fetch('/sports/Football',{
                method:'POST',
                body: JSON.stringify(teamss),
                headers:{
                    "Content-Type":"application/json"
                }
            });
                const json = await response.json();
        
                if(!response.ok){
                    console.log("failed")
                }
        }
    }


    return (
        <form className="content" onSubmit={handleClick}>
        <div className="content-column">
            <img className="image" src={props.imageURL}/>
            <p className="text">{props.date}</p>
            <p className="text">{props.TeamName}</p>
            <input hidden name={props.TeamName} />
            <p className="text">Next Fixture: {props.currentFixture}</p>
        </div>  
            <button type="submit"><img type="image" className="bookmark" src={bookmark}/></button>
        </form>
    )
}

export default Content;