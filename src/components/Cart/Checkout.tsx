import React from 'react';

import classes from './Checkout.module.css';

type CheckoutProps = { onCancel: () => void };

const Checkout = (props: CheckoutProps) => {
  const confirmHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Your name</label>
        <input type='text' id='name' />
      </div>
      <div className={classes.control}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' />
      </div>
      <div className={classes.control}>
        <label htmlFor='postal'>Postal code</label>
        <input type='text' id='postal' />
      </div>
      <div className={classes.control}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' />
      </div>
      <button type='button' onClick={props.onCancel}>
        Cancel
      </button>
      <button>Confirm</button>
    </form>
  );
};

export default Checkout;
