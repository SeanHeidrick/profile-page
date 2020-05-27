import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { AboutMe } from "./AboutMe";

function App() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    console.log("here");
  };
  return (
    <>
      <header>
        Sean Heidrick
        <button onClick={() => setActive(!active)}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </header>
      <nav>
        <a href="/">Home</a>
        <a href="/">About Me</a>
        <a href="/">Projects</a>
        <a href="/">My Resume</a>
        <a href="/">My Videos</a>
        <a href="/">My Pictures</a>
      </nav>
      <AboutMe />
    </>
  );
}

export default App;
