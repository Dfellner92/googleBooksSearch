import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}



export function FormBtn(props) {
  return (
    <button style={{ float: "right", marginBottom: 10 }} className="btn btn-success w-100">
      {props.text}
    </button>
  );
}
