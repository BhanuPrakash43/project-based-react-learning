import { useState } from "react";

function Practice() {
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

  const [todoTitle, setTodoTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (todoTitle.trim().length === 0) {
      setTodoTitle("");
      alert("Type something in the input field.");
      return;
    }

    function addTodo(newTodo) {
      setTodos((prevTodos) => [...prevTodos, newTodo]);
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
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={todoTitle}
            onChange={(e) => {
              setTodoTitle(e.target.value);
            }}
          />
          <button type="submit">Add</button>
        </form>
        {todos.map((todo) => (
          <div key={todo.id}>{todo.title}</div>
        ))}
      </div>
    </div>
  );
}
export default Practice;
