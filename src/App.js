import React from "react";
import "./App.scss";
import { AboutMe } from "./pages/AboutMe";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { MyResume } from "./pages/MyResume";
import { MyVideos } from "./pages/MyVideos";
import { MyPictures } from "./pages/MyPictures";

function App() {
  return (
    <>
      <Header />

      <Home />
      <AboutMe />
      <Projects />
      <MyResume />
      <MyVideos />
      <MyPictures />
    </>
  );
}
export default App;
