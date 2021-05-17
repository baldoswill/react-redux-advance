import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from './ui';

const initialState = { items: [], totalQuantity: 0, changed: false }

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        replaceItems(state, action){
            state.items = action.payload.items;
            state.totalQuantity = action.payload.totalQuantity;
        },
        addItem(state, action) {
            let newItem = action.payload;

            let existingItem = state.items.find(item => item.id === action.payload.id);

            if (!existingItem) {
                state.items.push({
                    title: newItem.title,
                    description: newItem.description,
                    price: newItem.price,
                    totalPrice: newItem.price,
                    id: newItem.id,
                    quantity: 1
                });


            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }

            state.totalQuantity++;
            state.changed = true;
        },
        removeItem(state, action) {
            let existingItem = state.items.find(item => item.id === action.payload);

            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            } else {
                state.items = state.items.filter(item => item.id !== action.payload);
            }

            if (state.totalQuantity > 0) {
                state.totalQuantity--
                state.changed = true;
            }
 
        },
        showCart(state) {
            state.showCart = !state.showCart;
        }
    }
});

export const sendCartData = cart => {
    return async (dispatch) => {

        dispatch(uiActions.showNotification(
            {
                title: 'Loading',
                message: 'Saving data...',
                status: 'loading'
            }));

        const sendRequest = async () => {
            const response = await fetch('https://redux-advance-3f4e1-default-rtdb.firebaseio.com/cart.json'
                , { method: 'PUT', body: JSON.stringify(cart) }
            );

            if (!response.ok) {
                throw new Error('Sending data cart failed..');
            }
        }

        try {
            await sendRequest();
            dispatch(uiActions.showNotification(
                {
                    title: 'Success',
                    message: 'Successfully saved data',
                    status: 'success'
                }));
        } catch (error) {
            dispatch(uiActions.showNotification(
                {
                  title: 'Error',
                  message: 'Something went happened',
                  status: 'error'
                }));
        }

        
     setTimeout(() => {
      // After 3 seconds set the show value to false
      dispatch(uiActions.showNotification(null));
    }, 3000)
 
    }
}


export const cartActions = cartSlice.actions;
export default cartSlice.reducer;