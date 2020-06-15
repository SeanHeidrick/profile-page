import React from "react";
import "./App.scss";
import { AboutMe } from "./pages/AboutMe";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";

import { MyVideos } from "./pages/MyVideos";
import { MyPictures } from "./pages/MyPictures";
import { Resume } from "./resume/src/resume";

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
