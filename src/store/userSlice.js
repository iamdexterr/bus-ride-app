import {createSlice} from '@reduxjs/toolkit';

const initialState = {};

const userSlice = createSlice({
    name : 'user',
    initialState: initialState,
    reducers : {    
        setUser(state,action){
         
            state = action.payload;
            return state
        }

    }
});

export const userActions = userSlice.actions;
export default userSlice.reducer;