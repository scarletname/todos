import React, { useState } from "react";
import { Container, Typography, Button, Paper, Tabs, Tab } from "@mui/material";
import TodoInput from "./components/ToDoInput";
import TodoList from "./components/ToDoList";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [tab, setTab] = useState(0);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const filteredTodos = () => {
    if (tab === 1) return todos.filter(todo => !todo.completed);
    if (tab === 2) return todos.filter(todo => todo.completed);
    return todos; // Все задачи
  };

  return (
    <Container maxWidth="sm">
      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          ToDo List
        </Typography>
        <TodoInput onAdd={addTodo} />

        <Tabs value={tab} onChange={handleTabChange} centered>
          <Tab label="Все" />
          <Tab label="Невыполненные" />
          <Tab label="Выполненные" />
        </Tabs>

        <TodoList todos={filteredTodos()} onToggle={toggleTodo} onDelete={deleteTodo} />

        <Typography align="center" sx={{ mt: 2 }}>
          Осталось задач: {todos.filter(todo => !todo.completed).length}
        </Typography>

        <Button variant="contained" color="secondary" fullWidth sx={{ mt: 2 }} onClick={clearCompleted}>
          Очистить выполненные
        </Button>
      </Paper>
    </Container>
  );
};

export default App;
