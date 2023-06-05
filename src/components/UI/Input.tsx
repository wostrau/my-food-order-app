import React from 'react';
import classes from './Input.module.css';

type InputPropsType = {
  label: string;
  input: {
    id: string;
    type: string;
    min: number;
    max: number;
    step: number;
    defaultValue: number;
  };
  ref?: React.Ref<HTMLInputElement>;
};

const Input = React.forwardRef<HTMLInputElement, InputPropsType>(
  (props, ref) => {
    const { label, input } = props;

    return (
      <div className={classes.input}>
        <label htmlFor={input.id}>{label}</label>
        <input {...input} ref={ref} />
      </div>
    );
  }
);

export default Input;
