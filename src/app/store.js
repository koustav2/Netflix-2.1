import { configureStore } from '@reduxjs/toolkit';
import  userSliceReducer  from './features/userSlice';

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
  },
  devTools: " window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()"
});
