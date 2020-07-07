import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AboutMe } from "./components/aboutMe/aboutMe";
import { Header } from "./components/header/header";
import { Home } from "./components/home/home";
import { Projects } from "./components/projects/projects";
import { MyVideos } from "./components/myVideos/myVideos";
import { MyPictures } from "./components/myPictures/myPictures";
import { Resume } from "./components/resume/resume";
import "./App.scss";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutMe" component={AboutMe} />
          <Route path="/projects" component={Projects} />
          <Route path="/myResume" component={Resume} />
          <Route path="/myVideos" component={MyVideos} />
          <Route path="/myPictures" component={MyPictures} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
