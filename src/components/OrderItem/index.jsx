import React from "react";

import styles from "./OrderItem.module.css";

export const OrderItem = ({ imgUrl, name, price, count }) => {
  return (
    <li>
      <div className={styles.orderCard}>
        <div>
          <img src={imgUrl} alt="" width="65" height="65" />
          <p className={styles.mealName}>{name}</p>
        </div>
        <div className={styles.countPrice}>
          <p className={styles.count}>{count} шт</p>
          <p className={styles.price}>{price} р</p>
        </div>
      </div>
    </li>
  );
};
