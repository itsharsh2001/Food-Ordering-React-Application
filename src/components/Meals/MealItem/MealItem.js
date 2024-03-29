import React, {useContext} from "react";
import styles from './MealItem.module.css'
import { MealItemForm } from "./MealItemForm";
import CartContext from "../../../store/cart-context";

export const MealItem = (props) => {
  const cartCtx = useContext(CartContext)
  const price = `$${props.price.toFixed(2)}`  //toFixed(2) price ko 2 decimal place pe rok dega
  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    })
  }

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
          <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};
