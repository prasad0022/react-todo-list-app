import React, { useState } from "react";
import Input from "./Input";
import List from "./List";

const App = () => {
  const [list, setList] = useState([]);

  const addList = (text) => {
    setList((prevValue) => {
      return [...prevValue, text];
    });
  };

  const deleteList = (id) => {
    setList((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  };

  const element = (
    <div className="container">
      <div className="heading">
        <h1>To Do List</h1>
      </div>
      <Input onAdd={addList} />
      <div>
        {list.map((item, index) => {
          return (
            <List key={index} id={index} note={item} onDelete={deleteList} />
          );
        })}
      </div>
    </div>
  );

  return element;
};

export default App;
