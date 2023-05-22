import React from "react";
import useFetch from "./useFetch";

export default function Fetch() {
  const { data, isLoading, erroe } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  console.log(data);
  return <div>fetch</div>;
}
