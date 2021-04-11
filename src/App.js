import React, { useEffect, useState } from "react";
import Template from "./components/Template";
import TodoList from "./components/TodoList";
import TodoInsert from "./components/TodoInsert";
import { MdAddCircle } from "react-icons/md";
import "./App.scss";

let nextId = 4;

function App() {
  const [insertToggle, setInsertToggle] = useState(false);
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

  const onInsertToggle = () => {
    setInsertToggle((prev) => !prev);
  };

  const onInsertTodo = (text) => {
    if (text === "") {
      return alert("할 일을 입력해주세요");
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false,
      };
      //push를 사용하면 해당 배열 자체가 변경되고
      //concat을 사용하면 새 배열이 리턴되고 기존배열은 변경되지 않음.
      setTodos((todos) => todos.concat(todo));
      nextId++;
    }
  };

  //클릭한 객체의 아이디를 찾아서 그 아이디와 일치하는 객체를 찾아서 해당 객체의
  //checked를 불리언 값을 바꿔준다.
  const onCheckToggle = (id) => {
    setTodos((todos) =>
      todos.map((element) =>
        element.id === id ? { ...element, checked: !element.checked } : element
      )
    );
  };

  return (
    <div className="App">
      <Template todoLength={todos.length}>
        <TodoList todos={todos} onCheckToggle={onCheckToggle} />
        <div className="add-todo-button" onClick={onInsertToggle}>
          <MdAddCircle />
        </div>
        {insertToggle && (
          <TodoInsert
            onInsertToggle={onInsertToggle}
            onInsertTodo={onInsertTodo}
          />
        )}
      </Template>
    </div>
  );
}

export default App;
