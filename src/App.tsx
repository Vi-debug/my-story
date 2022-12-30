import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";
import useWindowDimensions from "./global-hook/dimension";

function App() {
  const { width } = useWindowDimensions();
  return (
    <div className="App">
      <header className="App-header">
        <div style={{marginRight: width > 600 ? (width - 600) * 0.2 : 0}} className="item-right-align">
          <Link to="am" className="header-text">.am()</Link>
          <Link to="about" className="header-text">.about()</Link>
          <Link to="email" className="header-text">.email()</Link>
        </div>
      </header>
      <div id="a">
        <Outlet/>
      </div>
    </div>
  );
}

export default App;