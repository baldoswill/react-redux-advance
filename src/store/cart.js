import {createSlice} from '@reduxjs/toolkit';

const initialState = {items: [], totalQuantity: 0, showCart: false}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItem(state, action){            
            const isTitleExists = state.items.some(item => item.title === action.payload.title);
            if(!isTitleExists){
                
                state.items = [...state.items, action.payload]   
                state.totalQuantity++;
            }                       
        },
        increaseQuantity(state, action){
           let item = state.items.find(item => item.id === action.payload);
        
        },
        decreaseQuantity(state){
            state.quantity--;
        },
        showCart(state){
            state.showCart = !state.showCart;
        }
    }
});


export const cartActions = cartSlice.actions;
export default cartSlice.reducer;