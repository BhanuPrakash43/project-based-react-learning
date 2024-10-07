import { useState } from "react";
import Practice from "./Practice"

function App() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todos, setTodos] = useState([
    {
      id: "1",
      title: "this is first todo",
    },
    {
      id: "2",
      title: "this is second todo",
    },
    {
      id: "3",
      title: "this is third todo",
    },
    {
      id: "4",
      title: "this is fourth todo",
    },
  ]);

  function addTodo(newTodo) {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (todoTitle.trim().length === 0) {
      setTodoTitle("");
      alert("type something in the input field");
      return;
    }

    const newTodo = {
      id: crypto.randomUUID(),
      title: todoTitle,
    };

    addTodo(newTodo);
    setTodoTitle("");
  }

  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoTitle}
          onChange={(e) => {
            setTodoTitle(e.target.value);
          }}
        />
        <button type="submit">Add Todo</button>
      </form> */}
      <Practice />
    </div>
  );
}
export default App;
