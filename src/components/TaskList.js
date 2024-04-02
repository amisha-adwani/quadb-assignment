import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { toggleComplete, deleteTask } from '../Slice/TodoSlice';
import Checkbox from '@mui/material/Checkbox';
import ListItemIcon from '@mui/material/ListItemIcon';

export default function TaskList() {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  
const handleToggleComplete =(taskId) =>{
  dispatch(toggleComplete(taskId))
}

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <List sx={{ width: '100%', maxWidth: 360 }}>
      {tasks.map((task) => (
        <ListItem key={task.id} disablePadding>
          <ListItemButton onClick={()=> handleToggleComplete(task.id)}>
          <ListItemIcon>
              <Checkbox
                edge="start"
                disableRipple
              />
            </ListItemIcon>
            <ListItemText primary={task.text} sx={{textDecoration:task.completed ? 'line-through': ''}} />
            <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(task.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    </div>
  );
}
