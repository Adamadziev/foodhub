import React from "react";
import { useSelector } from "react-redux";

import { OrderItem } from "../OrderItem";

import styles from "./YourOrder.module.css";

export const YourOrder = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className={styles.yourOrder}>
      {cartItems.length !== 0 ? (
        <>
          <h3>Состав заказа</h3>
          <ul>
            {cartItems.map((item, i) => {
              return <OrderItem key={i} {...item} />;
            })}
          </ul>
        </>
      ) : (
        <h3>Вы ничего не добавили в корзину</h3>
      )}
    </div>
  );
};
