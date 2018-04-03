import React from "react";

export const Container = ({ fluid, children }) => (
  <div style={{ textAlign: "center" }} className={`container${fluid ? "-fluid" : ""}`}>
    {children}
  </div>
);
