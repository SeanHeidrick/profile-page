import React, { useState } from "react";
import { Nav } from "./Nav";
export const Header = () => {
  let navStyles = {
    border: "none",
    flexDirection: "column",
    border: "1px solid white",
    borderRadius: "10px",
  };
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  navStyles.display = active ? "flex" : "none";

  return (
    <>
      <header>
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
