import classes from './CartButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui';


const CartButton = (props) => {

  const totalQuantity = useSelector(state => state.cartReducer.totalQuantity);
  const dispatch = useDispatch();

  const showCartHandler = () => {
    dispatch(uiActions.toggleShowCart());
  }

  return (
    <button className={classes.button} onClick = {showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
