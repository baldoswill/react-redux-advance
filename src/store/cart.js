import {createSlice} from '@reduxjs/toolkit';

const initialState = {items: [], totalQuantity: 0, showCart: false}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItem(state, action){            
            let newItem = action.payload; 
            
            let existingItem = state.items.find(item => item.id === action.payload.id);
 
            if(!existingItem){                
                state.items.push({
                    title: newItem.title,
                    description: newItem.description,
                    price: newItem.price,
                    totalPrice: newItem.price,
                    id: newItem.id,
                    quantity: 1
                });
 
                state.totalQuantity++;
            }else{
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }                       
        },        
        removeItem(state, action){           
            let existingItem = state.items.find(item => item.title === action.payload);
            if(existingItem && existingItem.quantity > 1){
                existingItem.quantity--;
            }
            
        },
        showCart(state){
            state.showCart = !state.showCart;
        }
    }
});


export const cartActions = cartSlice.actions;
export default cartSlice.reducer;