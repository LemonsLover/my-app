import React from "react";
import style from "./ToDoList.module.css";

type Props = {
  text: string;
  id: string;
  handleDelete: (id: string) => void;
};

var ToDoField = ({ text, id, handleDelete }: Props) => {
  return (
    <tr>
      <td>
        <span>{text} </span>
      </td>
      <td>
        <span
          className={style.deleteButton}
          onClick={() => {
            handleDelete(id);
          }}
        >
          Удалить
        </span>
      </td>
    </tr>
  );
};

export default ToDoField;
