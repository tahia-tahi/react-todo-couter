import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (!text) return;

    setTodos([...todos, text]);
    setText("");
  };

  return (
    <div>
      <h2>Todo List</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write todo"
      />

      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
