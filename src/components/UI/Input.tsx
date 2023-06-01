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
};

const Input = (props: InputPropsType) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;
