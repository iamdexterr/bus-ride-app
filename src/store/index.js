import {configureStore} from '@reduxjs/toolkit';
import RidesReducer from './ridesSlice';
import UserReducer from './userSlice';
import FilterReducer from './filterSlice';


const store = configureStore({
    reducer : {
        rides : RidesReducer,
        user :UserReducer,
        filter : FilterReducer
    }
});

export default store;