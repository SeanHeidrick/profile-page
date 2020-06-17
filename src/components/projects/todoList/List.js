import React from "react";
export const List = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map((item, i) => {
        return (
          <li className="list-item">
            <p>{item.input}</p>
            <button onClick={() => onDelete(i)}>x</button>
          </li>
        );
      })}
    </ul>
  );
};
