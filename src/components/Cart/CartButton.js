import classes from './CartButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';


const CartButton = (props) => {

  const totalQuantity = useSelector(state => state.cartReducer.totalQuantity);
  const dispatch = useDispatch();

  const showCartHandler = () => {
    dispatch(cartActions.showCart());
  }

  return (
    <button className={classes.button} onClick = {showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
