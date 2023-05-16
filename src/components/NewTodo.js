import React, { useState } from "react";
import { v4 as uuid } from "uuid";
export default function NewTodo(props) {
  const [todo, setTodo] = useState({ id: uuid(), title: "", desc: "" });
  const { title, desc } = todo;
  const handleInputField = (e) => {
    e.stopPropagation();
    const name = e.target.name;
    setTodo((todo) => {
      return { ...todo, [name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    setTodo((todo) => {
      return { ...todo, id: uuid() };
    });
    props.onNewTodo(todo);
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title : </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleInputField}
          />
        </div>
        <div>
          <label>Description : </label>
          <input
            type="text"
            name="desc"
            value={desc}
            onChange={handleInputField}
          />
        </div>
        <button type="submit">ADD Todo</button>
      </form>
    </div>
  );
}
