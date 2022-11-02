import TodoList from "./TodoList";
import React, { useState } from "react";

// function handleAddToDo


function App() {
  const [todos, setTodos] = useState([{id : 1, name : 'todo221', complete : false}]);
  return (
    <>
      <h1>fdsfsfd</h1>
      <TodoList todoList={todos}/>
      <input type={"text"} />
      <button>Add todo</button>
      <button>Clear complete todo</button>
      <div>{todos.length} todos left</div>
    </>
  );
}

export default App;
