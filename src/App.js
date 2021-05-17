
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { uiActions } from './store/ui';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {

  const dispatch = useDispatch();

  const showCart = useSelector(state => state.uiReducer.showCart);
  const notification = useSelector(state => state.uiReducer.notification);
  const cart = useSelector(state => state.cartReducer);

  useEffect(() => {

    const saveCart = async () => {

      // dispatch(uiActions.showNotification(
      //   {
      //     title: 'Loading',
      //     message: 'Saving data...',
      //     status: 'loading'
      //   }));


      // const response = await fetch('https://redux-advance-3f4e1-default-rtdb.firebaseio.com/cart.json'
      //   , { method: 'PUT', body: JSON.stringify(cart) }
      // );    

      // if(!response.ok){
      //   throw new Error('Sending data cart failed..');
      // }

      dispatch(uiActions.showNotification(
        {
          title: 'Success',
          message: 'Successfully saved data',
          status: 'success'
        }));
    }

    if(isInitial){
      isInitial = false;
      return;
    }

    saveCart().catch(() => {
      dispatch(uiActions.showNotification(
        {
          title: 'Error',
          message: 'Something went happened',
          status: 'error'
        }));
    });

    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      dispatch(uiActions.showNotification(null));
    }, 6000)

    return () => {
      clearTimeout(timeId)
    }
 

  }, [cart, dispatch])

  return (
    <>
      {notification &&
        <Notification
          title={notification.title}
          status={notification.status}
          message={notification.message}
        />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
