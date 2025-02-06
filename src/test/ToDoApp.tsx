import { useReducer, useState } from "react";
import React from "react";

//this is an example on how to use reducer

// Define reducer
const todoReducer = (state: { id: number; text: string }[], action: any) => {
  switch (action.type) {
    case "add":
      return [...state, { id: Date.now(), text: action.payload }];
    case "remove":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      throw new Error("Unknown action type");
  }
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim()) {
      dispatch({ type: "add", payload: text });
      setText("");
    }
  };

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}{" "}
            <button
              onClick={() => dispatch({ type: "remove", payload: todo.id })}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
