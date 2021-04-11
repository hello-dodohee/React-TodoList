import "./App.css";
import React, { useEffect, useState } from "react";
import Template from "./components/Template";
import TodoList from "./components/TodoList";

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
  ]);
  return (
    <div className="App">
      <Template>
        <TodoList todos={todos} />
      </Template>
    </div>
  );
}

export default App;
