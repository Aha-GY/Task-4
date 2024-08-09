import { FaCheck, FaTasks } from "react-icons/fa";
import TodoList from "./componet/TodoList";
// import TodoList from "./components/TodoList";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="logoside">
          <FaTasks />
          <h1>To-DO List</h1>
          <FaCheck />
        </div>
      </div>
      <TodoList />
    </div>
  );
}

export default App;
