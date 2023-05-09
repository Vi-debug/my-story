import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";
import useWindowDimensions from "./global-hook/dimension";

const title = ["I'm...", "About myself...", "Email me..."];

function App() {
  const { width } = useWindowDimensions();
  const [titleIndex, setTitleIndex] = useState(0);

  function changeTitle(index: number) {
    setTitleIndex(index);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{ marginRight: width > 600 ? (width - 600) * 0.2 : 0 }}
          className="header-container"
        >
          <text
            style={{ marginLeft: width > 600 ? (width - 600) * 0.2 : 0 }}
            className="header-title"
          >
            {title[titleIndex]}
          </text>
          <div>
            <Link
              onClick={() => changeTitle(0)}
              style={{ color: titleIndex === 0 ? "gray" : "white" }}
              to=""
              className="header-text"
            >
              .am()
            </Link>
            <Link
              onClick={() => changeTitle(1)}
              style={{ color: titleIndex === 1 ? "gray" : "white" }}
              to="about"
              className="header-text"
            >
              .about()
            </Link>
            <Link
              onClick={() => changeTitle(2)}
              style={{ color: titleIndex === 2 ? "gray" : "white" }}
              to="email"
              className="header-text"
            >
              .email()
            </Link>
          </div>
        </div>
      </header>
      <div className="outlet">
        <Outlet />
      </div>
      <div className="App-footer" />
    </div>
  );
}

export default App;
