import { configureStore } from "@reduxjs/toolkit";
import authReducer from 'containers/Auth/authSlice';

const store = configureStore({
    reducer: {
       auth: authReducer,
    }
})

export default store;