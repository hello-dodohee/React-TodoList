import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.scss";

const TodoList = ({
  todos,
  onCheckToggle,
  onInsertToggle,
  onChangeSelectedTodo,
}) => {
  return (
    <div className="TodoList">
      {todos.map((element) => (
        <TodoItem
          todo={element}
          key={element.id}
          onCheckToggle={onCheckToggle}
          onInsertToggle={onInsertToggle}
          onChangeSelectedTodo={onChangeSelectedTodo}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoList;
