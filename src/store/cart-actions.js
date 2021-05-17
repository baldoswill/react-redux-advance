import { uiActions } from './ui';
import { cartActions } from './cart';

export const fetchCartData = () => {
    return async(dispatch) => {

        const fetchData = async () => {
            const response = await fetch('https://redux-advance-3f4e1-default-rtdb.firebaseio.com/cart.json');

            if (!response.ok) {
                throw new Error('Could not fetch cart data');
            }

            return response.json();
        }

        try {
            const cartData = await fetchData();
            
            if(cartData != null){
                dispatch(cartActions.replaceItems(
                    {items: cartData.items || [], totalQuantity: cartData.totalQuantity || 0}
                ));
            }
            
        } catch (error) {
            dispatch(uiActions.showNotification(
            {
                title: 'Error',
                message: 'Unable to fetch data',
                status: 'error'
            }));
        }

    }
}

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
                , { method: 'PUT', body: JSON.stringify({
                    totalQuantity: cart.totalQuantity, items: cart.items
                }) }
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