import React, { Dispatch, SetStateAction, useState } from "react";
import Todoservise from "../css/Todoservise";
import TodoTypes from "../css/todo";
import "../css/TodoForm.css";

interface PropTypes {
  setTodos: Dispatch<SetStateAction<TodoTypes[]>>;
}

const TodoForm: React.FC<PropTypes> = ({ setTodos }) => {
  const [newTodoText, setNewTodoText] = useState<string>("");
  const handleAddTodo = () => {
    if (newTodoText.trim() != "") {
      const newTodo = Todoservise.addTodos(newTodoText);
      setTodos((prevTodo) => [...prevTodo, newTodo]);
      setNewTodoText("");
    }
  };
  return (
    <div className="inputForm">
      <input
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        autoFocus={true}
        placeholder="Go ahead, Add a Task"
      />
      <button onClick={handleAddTodo}>Add Task</button>
    </div>
  );
};

export default TodoForm;