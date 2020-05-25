import React from "react";
import "./Banner.css";


function Banner({ children }) {
  return (
    <div id="banner">
      {children}
    </div>
  );
}

export default Banner;
