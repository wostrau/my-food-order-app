import React from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = (props: {
  id: string;
  onAddToCart: (amount: number) => void;
}) => {
  const [amountIsValid, setAmountIsValid] = React.useState<boolean>(true);
  const amountInputRef = React.useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current?.value;
    const enteredAmountNumber = Number(enteredAmount);

    if (
      enteredAmount?.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount' + props.id,
          type: 'number',
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
