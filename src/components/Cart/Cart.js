import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';


const Cart = (props) => {

  const cartItems = useSelector(state => state.cartReducer.items);
  const showCart = useSelector(state => state.cartReducer.showCart);

  let cart = null;

  const increaseQuantityHandler = (id) => {

  }

  const decreaseQuantityHandler = (id) => {
    
  }

  if (showCart) {
    cart = <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems && cartItems.map(cartItem => {
          return <CartItem key={cartItem.title}
            item={{ title: cartItem.title, quantity: 3, price: cartItem.price, total: 22 }}
          />
        })}
      </ul>
    </Card>
  }

  return cart;
};

export default Cart;
