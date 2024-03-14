import React from "react";

const Input = ({ className, id, type, name, value, onChange, placeholder }) => {
  return (
    <input
      className={className}
      id={id}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
