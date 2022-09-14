import { createSlice } from '@reduxjs/toolkit'



export const AppNavSlice = createSlice({
    name: 'appNav',

    initialState:{
            value:'home',
            navbarShowModal: false,
    },
    reducers: {
        updateAppNav:(state, action) => {
            state.value = action.payload;
        },
        setNavbarShowModal:(state, action) => {
            state.navbarShowModal = action.payload;
        }
    }
});

export const {updateAppNav,setNavbarShowModal } = AppNavSlice.actions;

export default AppNavSlice.reducer;