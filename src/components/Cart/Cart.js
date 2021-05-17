import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';


const Cart = (props) => {

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cartReducer.items);
  
  const addItemHandler = (item) => {
    dispatch(cartActions.addItem(item));
  }
  const removeItemHandler = (title) => {
    dispatch(cartActions.removeItem(title));
  }

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems && cartItems.map(cartItem => {
          return <CartItem 
            key={cartItem.id}
            item={{ title: cartItem.title, quantity:  cartItem.quantity, price: cartItem.price, total: cartItem.totalPrice }}
            addItem = {e => addItemHandler({ title: cartItem.title, price: cartItem.price, description: cartItem.description, id: cartItem.id })}
            removeItem = {e => removeItemHandler(cartItem.id)}
          />
        })}
      </ul>
    </Card>
  );
};

export default Cart;
