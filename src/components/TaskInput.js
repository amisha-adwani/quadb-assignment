import React,{useState} from 'react'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button';
import { useDispatch} from 'react-redux';
import { addTask } from '../Slice/TodoSlice';
const TaskInput = () => {
   const dispatch = useDispatch()
const [task, setTask] = useState('')
const addTaskHandler =()=>{
    dispatch(addTask(task))
    setTask('')
}
  return (
    <div>
       <TextField
          label="Enter task"
          value={task}
          onChange={(e)=>setTask(e.target.value)}
          />
           <Button variant="contained" sx={{height:50}} onClick={addTaskHandler}>Add</Button>
    </div>
  )
}

export default TaskInput
