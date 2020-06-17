import React from "react";
import todoList from "./img/todoList.jpg";
import { TodoApp } from "./todoList/TodoApp";
import "./projects.scss";
export const Projects = () => {
  return (
    <>
      <h3 className="project-title">Projects</h3>
      <div className="projects">
        <TodoApp />
      </div>
      ;
    </>
  );
};
