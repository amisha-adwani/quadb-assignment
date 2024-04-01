import {configureStore} from '@reduxjs/toolkit';
import { TaskSlice } from '../Slice/TodoSlice';
export const store = configureStore({
    reducer: TaskSlice.reducer
})