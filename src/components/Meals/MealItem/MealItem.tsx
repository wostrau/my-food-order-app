import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

type MealItemPropsType = {
  id: string;
  name: string;
  description: string;
  price: number;
};

const MealItem = (props: MealItemPropsType) => {
  const formattedPrice = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
