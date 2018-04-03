import React from "react";

export const FormBtn = props => (
  <button {...props} style={{ marginBottom: 10, textAlign:"center" }} className="btn btn-success">
    {props.children}
  </button>
);
