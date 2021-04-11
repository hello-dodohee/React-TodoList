import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.scss";

const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map((element) => (
        <TodoItem todo={element}></TodoItem>
      ))}
    </div>
  );
};

export default TodoList;
