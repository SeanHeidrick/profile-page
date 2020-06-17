import React from "react";
import "./todoList.scss";
import { useState } from "react";
import { List } from "./List";

export const TodoApp = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const addItems = (e) => {
    e.preventDefault();
    let newItem = { input, completed: false };
    let itemsCopy = [...items];
    itemsCopy.push(newItem);
    setItems(itemsCopy);
    console.log(items);
  };

  const deleteItem = (i) => {
    let itemsCopy = [...items];
    itemsCopy.splice(i, 1);
    setItems(itemsCopy);
  };

  return (
    <main className="todo-container">
      <div className="todo-app">
        <h2>Todo List</h2>
        <form className="todo-form" onSubmit={addItems}>
          <input
            className="todo-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="todo-button">Add</button>
        </form>
        <List items={items} onDelete={deleteItem} />
      </div>
    </main>
  );
};
