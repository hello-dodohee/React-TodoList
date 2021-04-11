import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.scss";

const TodoList = ({ todos, onCheckToggle }) => {
  return (
    <div className="TodoList">
      {todos.map((element) => (
        <TodoItem
          todo={element}
          key={element.id}
          onCheckToggle={onCheckToggle}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoList;
