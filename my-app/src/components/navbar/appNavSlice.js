import { createSlice } from '@reduxjs/toolkit'



export const AppNavSlice = createSlice({
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

export const {updateAppNav} = AppNavSlice.actions;

export default AppNavSlice.reducer;