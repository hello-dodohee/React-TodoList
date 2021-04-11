import React, { useEffect, useState } from "react";
import Template from "./components/Template";
import TodoList from "./components/TodoList";
import { MdAddCircle } from "react-icons/md";
import "./App.scss";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "할일 1",
      checked: true,
    },
    {
      id: 2,
      text: "할일 2",
      checked: false,
    },
    {
      id: 3,
      text: "할일 3",
      checked: false,
    },
    {
      id: 4,
      text: "할일 4",
      checked: false,
    },
    {
      id: 5,
      text: "할일 5",
      checked: true,
    },
  ]);
  return (
    <div className="App">
      <Template todoLength={todos.length}>
        <TodoList todos={todos} />
        <div className="add-todo-button">
          <MdAddCircle />
        </div>
      </Template>
    </div>
  );
}

export default App;
