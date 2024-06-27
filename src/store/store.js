import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from '../Reducer/AuthSlice';




const store = configureStore({
  reducer: {
    auth: AuthSlice
  },
  devTools: import.meta.env.DEV,
});

export default store;
