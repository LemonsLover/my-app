import React, { useState } from "react";
import ToDoField from "./ToDoFeild";
import style from "./ToDoList.module.css";

type todoType = {
  text: string;
  id: string;
};

var TodoList = () => {
  var [text, setText] = useState("");
  var [todos, setTodos] = useState<todoType[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    var target = e.target;
    setText(target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && text !== "") {
      setTodos((prev) => [...prev, { text, id: Date.now().toString() }]);
      setText("");
    }
  };

  const handleDelete = (id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const drawTable = () => {
    return (
      <table className={style.toDoTable}>
        <tr>
          <th>Текст</th>
          <th>Управление</th>
        </tr>
        {todos.map((e) => (
          <ToDoField
            key={e.id}
            text={e.text}
            id={e.id}
            handleDelete={handleDelete}
          />
        ))}
      </table>
    );
  };

  return (
    <div className={style.mainContainer}>
      <fieldset className={style.inpContainer}>
        <legend>Введите текст и нажмите Enter</legend>
        <input
          value={text}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      </fieldset>
      {todos.length !== 0 ? drawTable() : null}
    </div>
  );
};

export default TodoList;
