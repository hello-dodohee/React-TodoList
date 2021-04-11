import React from "react";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import "./TodoItem.scss";

const TodoItem = ({ todo, onCheckToggle, onInsertToggle }) => {
  const { id, text, checked } = todo;
  return (
    <div className="TodoItem">
      <div className={`content ${checked ? "checked" : ""}`}>
        {checked ? (
          <ImCheckboxChecked onClick={() => onCheckToggle(id)} />
        ) : (
          <ImCheckboxUnchecked onClick={() => onCheckToggle(id)} />
        )}
        <div
          className="text"
          onClick={() => {
            onInsertToggle();
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
