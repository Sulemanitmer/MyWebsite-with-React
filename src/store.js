import { configureStore } from '@reduxjs/toolkit';
import appNavReducer from './components/navbar/appNavSlice'

export default configureStore({
    reducer: {
        appNav: appNavReducer,
    }
});