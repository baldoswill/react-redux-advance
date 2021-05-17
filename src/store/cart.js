import {createSlice} from '@reduxjs/toolkit';

const initialState = {items: [], totalQuantity: 0}

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
 
                
            }else{
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }   
            
            state.totalQuantity++;
        },        
        removeItem(state, action){           
            let existingItem = state.items.find(item => item.id === action.payload);

            if(existingItem && existingItem.quantity > 1){
                existingItem.quantity--;
            }else{
                state.items = state.items.filter(item => item.id !== action.payload);
            }

            if(state.totalQuantity > 0){
                state.totalQuantity--
            }
            
            
        },
        showCart(state){
            state.showCart = !state.showCart;
        }
    }
});


export const cartActions = cartSlice.actions;
export default cartSlice.reducer;