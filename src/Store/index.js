import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Slice/AuthorizationSlice';

const store = configureStore({
    reducer: {
        auth: authReducer
    }
});

export default store;
