import { createSlice } from '@reduxjs/toolkit'



export const appNavSlice = createSlice({
    name: 'appNav',

    initialState:{
        value: {
            navbarOption:'home',
            navbarShowModal: false,
        }
    },
    reducers: {
        updateAppNav:(state, action) => {
            state.value = action.payload;
        }
    
    }
});

export const {updateAppNav} = appNavSlice.actions;

export default appNavSlice.reducer;