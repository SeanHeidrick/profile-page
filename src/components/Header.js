import React, { useState } from "react";
import { Nav } from "./Nav";
import "../sassFiles/header.scss";
export const Header = () => {
  let navStyles = {};
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  navStyles.display = active ? "flex" : "none";

  return (
    <>
      <header className="headerMenu">
        Sean Heidrick
        <button onClick={handleClick}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </header>
      <Nav
        navStyles={navStyles}
        active={active}
        setActive={setActive}
        handleClick={handleClick}
      />
    </>
  );
};
