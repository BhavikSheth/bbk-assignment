import React from "react";

const Input = (props) => {
  return (
    <div className={props.className}>
      <label htmlFor={props.id}>{props.label}</label>
      <input id={props.id} type={props.type} value={props.value} onChange={props.onChange} name={props.name} />
    </div>
  );
};

export default Input;
