import React from "react";
import './Input.css'

const Input = (props) => {
  return (
    <div className="search">
      <i className="fas fa-search"></i>
      <input
        type={props.type}
        name={props.name}
        aria-label={props['arial-label']}
        placeholder={props.placeholder}
        onKeyDown={props.onKeyDown}
      />
    </div>
  );
};

export default Input;
