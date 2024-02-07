import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/home"
import Services from "./components/services"
import Team from "./components/team"
import Contact from "./components/contactus";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
        <Services/>
        <Team/>
        <Contact/>
    </div>
  );
}

export default App;
