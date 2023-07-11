import React from "react";

const List = (props) => {
  return (
    <div
      onClick={() => {
        props.onDelete(props.id);
      }}
    >
      <li>{props.note}</li>
    </div>
  );
};

export default List;
