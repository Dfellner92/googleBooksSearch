import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 150,  paddingTop: 120, textAlign: "center", minWidth: "100%" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
