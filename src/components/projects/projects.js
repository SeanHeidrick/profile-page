import React from "react";
import { TodoApp } from "./todoList/TodoApp";
import { TipCalculator } from "./tipCalculator/TipCalculator";

export const Projects = () => {
  return (
    <>
      <main className="text-page">
        <h1>
          <p className="page-title">Projects</p>
        </h1>
        <div className="image-page">
          <TodoApp />
          <TipCalculator />
        </div>
      </main>
    </>
  );
};
