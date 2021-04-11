import React, { useState, useEffect } from "react";
import { MdAddCircle, MdDelete, MdEdit } from "react-icons/md";
import "./TodoInsert.scss";

const TodoInsert = ({
  onInsertToggle,
  onInsertTodo,
  selectedTodo,
  onRemove,
  onUpdate,
}) => {
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

  //할일 목록을 눌렀을때 인풋값에 할일 목록 그 글자 그대로 나오게
  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text);
    }
  }, [selectedTodo]);

  return (
    <div className="insert-center">
      <div className="background" onClick={onInsertToggle}></div>
      <form
        onSubmit={
          selectedTodo
            ? () => {
                onUpdate(selectedTodo.id, value);
              }
            : onSubmit
        }
      >
        <input
          placeholder="오늘의 할일은 무엇인가요?"
          value={value}
          onChange={onChange}
        ></input>
        {selectedTodo ? (
          <div className="rewrite">
            <MdEdit onClick={() => onUpdate(selectedTodo.id, value)} />
            <MdDelete onClick={() => onRemove(selectedTodo.id)} />
          </div>
        ) : (
          <button type="submit">
            <MdAddCircle />
          </button>
        )}
      </form>
    </div>
  );
};

export default TodoInsert;
