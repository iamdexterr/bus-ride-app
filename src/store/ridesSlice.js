import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

const ridesSlice = createSlice({
    name : 'rides',
    initialState: initialState,
    reducers : {    
        setRides(state,action){
            state = action.payload;
            return state
        }

    }
});

export const ridesActions = ridesSlice.actions;
export default ridesSlice.reducer;