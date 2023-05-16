import React from "react";

export default function Todo(props) {
  const { id, title, desc } = props.todo;
  const handleClick = (id) => {
    props.onRemove(id);
  };
  return (
    <div>
      <h1>{title}</h1>
      <p>{desc}</p>
      <button onClick={() => handleClick(id)}>delete</button>
    </div>
  );
}
