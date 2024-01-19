import React from "react";
import {BrowserRouter,Routes,Route,Link,Navlink} from "react-router-dom"
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Football from "./pages/Football/football";
import Cricket from "./pages/Cricket/cricket.js" 
import Pl from "./pages/Football/PL"
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/football" element={<Football/>}>
          <Route path="/football/pl" element={<Pl Name="English Premier League"/>}/>
          <Route path="/football/laliga" element={<Pl Name="Spanish LALIGA"/>}/>
          <Route path="/football/bundesliga" element={<Pl  Name="German Bundesliga"/>}/>
          <Route path="/football/seriea" element={<Pl Name="Italian Serie A"/>}/>
          <Route path="/football/ligue" element={<Pl Name="French Ligue 1"/>}/>
          <Route path="/football/saudi" element={<Pl Name="Saudi Pro League"/>}/>
          <Route path="/football/mexican" element={<Pl Name="Mexican Liga BBVA MX"/>}/>
          <Route path="/football/mls" element={<Pl Name="MLS"/>}/>
          <Route path="/football/scottish" element={<Pl Name="Scottish Premiership"/>}/>
          <Route path="/football/portugese" element={<Pl Name="Portuguese Primeira Liga"/>}/>
        </Route>
        <Route path="/cricket" element={<Cricket/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
