import React from "react";
import { ListItem, Checkbox, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed, onToggle, onDelete }) => {
  return (
    <ListItem
      sx={{ display: "flex", justifyContent: "space-between", textDecoration: completed ? "line-through" : "none" }}
    >
      <Checkbox checked={completed} onChange={() => onToggle(id)} />
      <Typography sx={{ flexGrow: 1 }}>{text}</Typography>
      <IconButton edge="end" color="error" onClick={() => onDelete(id)}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default TodoItem;
