import React from "react";

export const BackgroundAnimation = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen pointer-events-none z-5">
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};
