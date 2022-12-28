import React from "react";
import "./App.css";
import useWindowDimensions from "./global-hook/dimension";
import { mainColor } from "./theme/colors";

function App() {
  const { width } = useWindowDimensions();
  return (
    <div className="App">
      <header className="App-header">
        <div style={{marginRight: width > 600 ? (width - 600) * 0.2 : 0}} className="item-right-align">
          <text className="header-text">.am()</text>
          <text className="header-text">.about()</text>
          <text className="header-text">.email()</text>
        </div>
      </header>
    </div>
  );
}

export default App;
