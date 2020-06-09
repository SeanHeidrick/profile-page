import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { AboutMe } from "./components/AboutMe";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />

      <AboutMe />
    </>
  );
}
export default App;
