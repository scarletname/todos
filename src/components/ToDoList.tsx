import React from "react";
import { List } from "@mui/material";
import TodoItem from "./ToDoItem";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
  return (
    <List>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </List>
  );
};

export default TodoList;
