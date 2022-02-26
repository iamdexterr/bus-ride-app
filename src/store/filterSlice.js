import {createSlice} from '@reduxjs/toolkit';

const initialState = {state: 'state',city: 'city'};

const filterSlice = createSlice({
    name : 'filter',
    initialState: initialState,
    reducers : {    
        setStateName(state,action){
            state.state= action.payload;
            return state
        },

        setCityName(state,action){
            state.city= action.payload;
            return state
        }

    }
});

export const filterActions = filterSlice.actions;
export default filterSlice.reducer;