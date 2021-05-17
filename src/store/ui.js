import {createSlice} from '@reduxjs/toolkit';


const uiSlice = createSlice({
    name: 'ui',
    initialState: {showCart: false, notification: null},
    reducers:{
        toggleShowCart(state){
            state.showCart = !state.showCart;
        },
        showNotification(state, action){
            
            if(action.payload == null){
                state.notification = null;
                return;
            }

            state.notification = {
                title: action.payload.title,
                message: action.payload.message,
                status: action.payload.status
            }
        }
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;

