import React, { useState } from "react";
import Todos from "./Todos";
import NewTodo from "./NewTodo";
import Fetch from "./UseEffect/Fetch";

export default function Home() {
  const dummyTodo = [
    {
      id: 1,
      title: "todo 1",
      desc: "description 1",
    },
  ];
  const [todo, setTodo] = useState(dummyTodo);
  const handleNewTodo = (newTodo) => {
    setTodo([...todo, newTodo]);
  };
  const removeTodo = (id) => {
    const filterTodo = todo.filter((todo) => todo.id !== id);
    setTodo(filterTodo);
  };
  return (
    <div>
      {/* <NewTodo onNewTodo={handleNewTodo} />
      <Todos todos={todo} onRemove={removeTodo} /> */}
      <Fetch />
    </div>
  );
}
