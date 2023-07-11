import React, { useState } from "react";

const Input = (props) => {
  const [text, setText] = useState();

  const handleChange = (event) => {
    const currentText = event.target.value;

    setText(currentText);
  };

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={text} />
      <button
        onClick={(event) => {
          props.onAdd(text);
          setText("");
          event.preventDefault();
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
};

export default Input;
