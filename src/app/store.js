import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/todoSlice'


export const store = configureStore({
  reducer: {
    todos:todoReducer
  },
});
