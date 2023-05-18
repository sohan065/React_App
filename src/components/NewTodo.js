import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useFormik } from "formik";
import * as yup from "yup";
export default function NewTodo(props) {
  // const [todo, setTodo] = useState({ id: uuid(), title: "", desc: "" });
  // const { title, desc } = todo;
  // const handleInputField = (e) => {
  //   e.stopPropagation();
  //   const name = e.target.name;
  //   setTodo((todo) => {
  //     return { ...todo, [name]: e.target.value };
  //   });
  // };
  // const handleSubmit = (e) => {
  //   setTodo((todo) => {
  //     return { ...todo, id: uuid() };
  //   });
  //   props.onNewTodo(todo);
  //   e.preventDefault();
  // };

  const formik = useFormik({
    initialValues: {
      id: uuid(),
      title: "",
      desc: "",
    },
    validationSchema: yup.object({
      name: yup.string().min(2),
      desc: yup.string().min(2),
    }),
    onSubmit: (values, { resetForm }) => {
      const newTodo = {
        ...values,
        id: uuid(),
      };
      props.onNewTodo(newTodo);
      resetForm({
        name: "",
        desc: "",
      });
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Title : </label>
          <input
            type="text"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label>Description : </label>
          <input
            type="text"
            name="desc"
            value={formik.values.desc}
            onChange={formik.handleChange}
          />
        </div>
        <button type="submit">ADD Todo</button>
      </form>
    </div>
  );
}
