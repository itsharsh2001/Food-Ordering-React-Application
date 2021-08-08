import React from "react";
import CartIcon from "../Cart/CartIcon";
import styles from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context'
import { useContext, useEffect, useState } from "react";
// import { isYieldExpression } from "typescript";

export const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
  const cartCtx = useContext(CartContext);

  const {items} = cartCtx;

  const numberOfCartItems = items.reduce((curNumber,item)=>{
    return curNumber + item.amount;
  },0)

  const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`

  useEffect(()=>{
    if (items.length === 0){
      return;
    }
    setBtnIsHighlighted(true);
    
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300); //this fires required function after 300ms because button ki animation lasts for 300ms check its css for comformation
    
    return () => {  //cleanup function in case we rapidly add new items before previous timer expires so that new bump effect can be added fastly
      clearTimeout(timer);
    }
  }, [items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};
