import React from 'react'
import AddNewTodo from "./add-new-todo";
import TodoList from "./todo-list";
export default function page() {
  return (
    <div>
     <AddNewTodo/>
     <TodoList/>
    </div>
  );
}
