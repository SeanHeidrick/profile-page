import React from "react";
// import "./myPictures.scss";

// import myPictures from "./pictures.json";

export const MyPictures = () => {
  let myPictures = require("../myPictures/pics.json");
  console.log(myPictures);
  return (
    <>
      <main className="text-page">
        <h1>
          <p className="page-title">My Pictures</p>
        </h1>
        <div className="image-page">
          {myPictures.map((item) => {
            console.log(item);
            return <img src={item.img} alt="error" className="picture" />;
          })}
        </div>
      </main>
    </>
  );
};
