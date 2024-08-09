import TodoTypes from "./todo";

const localStorage_key = "todos";

const todoService = {
  // Get todos
  getTodos: (): TodoTypes[] => {
    const todoStr = localStorage.getItem(localStorage_key);
    return todoStr ? JSON.parse(todoStr) : [];
  },

  // Add todos
  addTodos: (text: string): TodoTypes => {
    const todos = todoService.getTodos();
    const newTodo: TodoTypes = { id: todos.length + 1, text, completed: false };
    const updateTodos = [...todos, newTodo];
    localStorage.setItem(localStorage_key, JSON.stringify(updateTodos));
    return newTodo;
  },

  // Updating the todo
updateTodo: (todo: TodoTypes): TodoTypes => {
  const todos = todoService.getTodos();
  const updateTodos = todos.map((t) => (t.id === todo.id ? todo : t));
  localStorage.setItem(localStorage_key, JSON.stringify(updateTodos));
  
  return todo;
},

// Deleting the todo
deleteTodo: (id: number): void => {
  const todos = todoService.getTodos();
  const updateTodos = todos.filter((todo) => todo.id !== id);
  localStorage.setItem(localStorage_key, JSON.stringify(updateTodos));
},


};

export default todoService;
