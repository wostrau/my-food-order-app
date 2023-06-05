import React from 'react';

import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props: { onClick: () => void }) => {
  const [btnIsHighlighted, setBtnIsHighlighted] =
    React.useState<boolean>(false);
  const cartCtx = React.useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item: any) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ''
  }`;

  React.useEffect(() => {
    if (items.length === 0) return;
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => setBtnIsHighlighted(false), 300);
    return () => clearTimeout(timer);
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
