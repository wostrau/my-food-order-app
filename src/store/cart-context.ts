import { CartItemType } from './CartProvider';
import React from 'react';

const CartContext = React.createContext({
  items: [] as CartItemType[],
  totalAmount: 0,
  addItem: (item: CartItemType) => {},
  removeItem: (id: string) => {},
  clearCart: () => {},
});

export default CartContext;
