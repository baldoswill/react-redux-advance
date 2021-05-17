import { useSelector} from 'react-redux';
import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';


function App() {

  const showCart = useSelector(state => state.uiReducer.showCart);
  const cart = useSelector(state => state.cartReducer);

  useEffect(() => {
    fetch('https://redux-advance-3f4e1-default-rtdb.firebaseio.com/cart.json'
    , {method: 'PUT', body: JSON.stringify(cart)}
    
    )
  }, [cart])

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
