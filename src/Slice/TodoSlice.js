import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    tasks: [{id:1, text:"First Task",completed:false}]
}

export  const TaskSlice = createSlice({
    name:'Task',
    initialState,
    reducers:{
        addTask:(state,action)=>{
            const task ={
                id: nanoid(),
                text: action.payload
            }
            state.tasks.push(task)
        },
        deleteTask :(state,action)=>{
            state.tasks = state.tasks.filter((task) => task.id !== action.payload )
        }
    }
})

export const {addTask,toggleComplete, deleteTask} = TaskSlice.actions

export default TaskSlice.red