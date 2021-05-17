import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cart';
import uiReducer from './ui';

const store = configureStore({
    reducer: {cartReducer: cartReducer, uiReducer: uiReducer},
  });

  export default store;