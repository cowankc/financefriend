import React from "react";
import "./Module.css";


function Module({ children }) {
  return (
    <div id="module">
      {children}
    </div>
  );
}

export default Module;