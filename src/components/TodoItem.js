import React from "react";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import "./TodoItem.scss";

const TodoItem = ({ todo }) => {
  const { id, text, checked } = todo;
  return (
    <div className="TodoItem">
      <div className={`content ${checked ? "checked" : ""}`}>
        {checked ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
        <div className="text">{text}</div>
      </div>
    </div>
  );
};

export default TodoItem;
