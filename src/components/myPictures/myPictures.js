import React from "react";

export const MyPictures = () => {
  let myPictures = require("../myPictures/pics.json");
  return (
    <>
      <main className="text-page">
        <h1>
          <p className="page-title">Pictures</p>
        </h1>
        <div className="image-page">
          {myPictures.map((item) => (
            <img src={item.img} alt="error" className="picture" />
          ))}
        </div>
      </main>
    </>
  );
};
