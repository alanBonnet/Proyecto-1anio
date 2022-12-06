import React from "react";

export default function CheckBox({ name, checked, setCheked }) {
  return (
    <>
      <input
        name={name}
        type="checkbox"
        checked={checked}
        onChange={setCheked}
      />
      <label>{name}</label>
    </>
  );
}
