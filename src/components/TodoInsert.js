import React, { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import "./TodoInsert.scss";

const TodoInsert = ({ onInsertToggle, onInsertTodo }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault(); //자동으로 새로고침 되는것을 막아주는 함수
    onInsertTodo(value);
    setValue("");
    onInsertToggle();
  };

  return (
    <div>
      <div className="background" onClick={onInsertToggle}></div>
      <form onSubmit={onSubmit}>
        <input
          placeholder="오늘의 할일은 무엇인가요?"
          value={value}
          onChange={onChange}
        ></input>
        <button type="submit">
          <MdAddCircle />
        </button>
      </form>
    </div>
  );
};

export default TodoInsert;
