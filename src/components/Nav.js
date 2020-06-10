import React from "react";
import { Link } from "react-router-dom";

export const Nav = (props) => {
  let navJSON = require("../objects/nav.json");
  return (
    <nav style={props.navStyles}>
      {navJSON.map((item) => (
        <Link to={item.link} key={item.title} onClick={props.handleClick}>
          <p>{item.title}</p>
        </Link>
      ))}
    </nav>
  );
};
