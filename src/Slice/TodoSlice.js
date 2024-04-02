import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    tasks: [{id:1, text:"First Task",completed:false}]
}

//reducers
export  const TaskSlice = createSlice({
    name:'Task',
    initialState,
    reducers:{
        addTask:(state,action)=>{
            //create a new task object
            const task ={
                id: nanoid(),
                text: action.payload,
                completed: false
            }
            //push tha task to the array
            state.tasks.push(task)
        },
        toggleComplete: (state, action) => {
            //find the task to update and toggle complete if the task is found
            const taskToUpdate = state.tasks.find(task => task.id === action.payload);
            if (taskToUpdate) {
                taskToUpdate.completed = !taskToUpdate.completed;
            }
        }
,        
        deleteTask :(state,action)=>{
            //filter out the task with the given id
            state.tasks = state.tasks.filter((task) => task.id !== action.payload )
        }
    }
})

export const {addTask,toggleComplete, deleteTask} = TaskSlice.actions

export default TaskSlice.red