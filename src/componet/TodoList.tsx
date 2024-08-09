import { useState } from "react";
import TodoTypes from "../css/todo";
import TodoService from "../css/Todoservise";
import { FaEdit, FaCheck } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import TodoForm from "./TodoForm";
import "../CSS/TodoList.css"

const TodoList = () => {
  const [todos, setTodos] = useState<TodoTypes[]>(TodoService.getTodos());
  const [editingTodoId, setEditedTodoId] = useState<number | null>(null);
  const [editingTodoText, setEditedTodoText] = useState<string>("");

  const handleEditStart = (id: number, text: string) => {
    setEditedTodoId(id);
    setEditedTodoText(text);
  };

  const handleEditCancel = () => {
    setEditedTodoId(null);
    setEditedTodoText("");
  };

  const handleEditSave = (id: number) => {
    if (editingTodoText.trim() !== "") {
      const updateTodo = TodoService.updateTodo({
        id,
        text: editingTodoText,
        completed: false,
      });
      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id == id ? updateTodo : todo))
      );

      setEditedTodoId(null);
      setEditedTodoText("");
    }
  };

  const handleDeleteTodo = (id: number) => {
    TodoService.deleteTodo(id);
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id != id));
  };

  return (
    <div className="todoContainer">
      <div>
        <TodoForm setTodos={setTodos} />
      </div>
      <div className="todos">
        {todos.map((todo) => (
          <div className="items" key={todo.id}>
            {editingTodoId == todo.id ? (
              <div className="editText">
                <input
                  type="text"
                  value={editingTodoText}
                  onChange={(e) => setEditedTodoText(e.target.value)}
                  autoFocus={true}
                />
                <button onClick={() => handleEditSave(todo.id)}>
                  <FaCheck />
                </button>

                <button
                  className="cancelBtn"
                  onClick={() => handleEditCancel()}
                >
                  <GiCancel />
                </button>
              </div>
            ) : (
              <div className="editBin">
                <span>{todo.text}</span>
              </div>
            )}
            <div className="frr">
            <button onClick={() => handleEditStart(todo.id, todo.text)}>
                  <FaEdit />
                </button>

            <button onClick={() => handleDeleteTodo(todo.id)}>
              <RiDeleteBin5Fill />
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;