import React from "react";
import { Link } from "react-router-dom";
export const Nav = (props) => {
  return (
    <nav style={props.navStyles}>
      <Link to={`/home`}>
        <p href="/">Home</p>
      </Link>
      <Link to={`/aboutMe`}>
        <p href="/">About Me</p>
      </Link>
      <Link to={`/projects`}>
        <p href="/">Projects</p>
      </Link>
      <Link to={`/myResume`}>
        <p href="/">My Resume</p>
      </Link>
      <Link to={`/myVideos`}>
        <p href="/">My Videos</p>
      </Link>
      <Link to={`/myPictures`}>
        <p href="/">My Pictures</p>
      </Link>
    </nav>
  );
};
