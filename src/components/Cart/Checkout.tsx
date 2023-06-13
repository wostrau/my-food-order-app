import React from 'react';

import classes from './Checkout.module.css';

const isNotEmpty = (value: string) => value.trim().length !== 0;
const isFiveChars = (value: string) => value.trim().length === 5;

type CheckoutProps = {
  onCancel: () => void;
  onConfirm: (userData: OrderType) => void;
};

export type OrderType = {
  name: string;
  street: string;
  postalCode: string;
  city: string;
};

const Checkout = (props: CheckoutProps) => {
  const [enteredNameIsValid, setEnteredNameIsValid] = React.useState(true);
  const [enteredStreetIsValid, setEnteredStreetIsValid] = React.useState(true);
  const [enteredPostalCodeIsValid, setEnteredPostalCodeIsValid] =
    React.useState(true);
  const [enteredCityIsValid, setEnteredCityIsValid] = React.useState(true);

  const nameInputRef = React.useRef<HTMLInputElement>(null);
  const streetInputRef = React.useRef<HTMLInputElement>(null);
  const postalCodeInputRef = React.useRef<HTMLInputElement>(null);
  const cityInputRef = React.useRef<HTMLInputElement>(null);

  const confirmHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredName = nameInputRef.current?.value ?? '';
    const enteredStreet = streetInputRef.current?.value ?? '';
    const enteredPostalCode = postalCodeInputRef.current?.value ?? '';
    const enteredCity = cityInputRef.current?.value ?? '';

    const enteredNameIsValid = isNotEmpty(enteredName);
    const enteredStreetIsValid = isNotEmpty(enteredStreet);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);
    const enteredCityIsValid = isNotEmpty(enteredCity);

    setEnteredNameIsValid(enteredNameIsValid);
    setEnteredStreetIsValid(enteredStreetIsValid);
    setEnteredPostalCodeIsValid(enteredPostalCodeIsValid);
    setEnteredCityIsValid(enteredCityIsValid);

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid;

    if (!formIsValid) return;
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
    } as OrderType);
  };

  const nameControlClasses = `${classes.control} ${
    enteredNameIsValid ? '' : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    enteredStreetIsValid ? '' : classes.invalid
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    enteredPostalCodeIsValid ? '' : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    enteredCityIsValid ? '' : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} />
        {!enteredNameIsValid && <p>Please enter a valid name.</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef} />
        {!enteredStreetIsValid && <p>Please enter a valid street.</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalCodeInputRef} />
        {!enteredPostalCodeIsValid && (
          <p>Please enter a valid postal code (5 characters long).</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef} />
        {!enteredCityIsValid && <p>Please enter a valid city.</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
