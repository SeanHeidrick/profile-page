import React from "react";
export const Nav = (props) => {
  return (
    <nav style={props.navStyles}>
      <a href="/">Home</a>
      <a href="/">About Me</a>
      <a href="/">Projects</a>
      <a href="/">My Resume</a>
      <a href="/">My Videos</a>
      <a href="/">My Pictures</a>
    </nav>
  );
};
