import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((element) => (
        <TodoItem todo={element}></TodoItem>
      ))}
    </div>
  );
};

export default TodoList;
