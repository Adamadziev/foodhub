import React from "react";
import { useDispatch } from "react-redux";
import {
  decCartItem,
  deleteCartItemById,
  incCartItem,
} from "../../redux/actions/cart";

import styles from "./CartItem.module.css";

export const CartItem = ({ id, imgUrl, name, price, count }) => {
  const dispatch = useDispatch();

  const onClickInc = () => {
    dispatch(incCartItem(id));
  };

  const onClickDec = () => {
    if (count > 1) {
      dispatch(decCartItem(id));
    }
  };

  const onClickDelete = () => {
    dispatch(deleteCartItemById(id));
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.imgAndName}>
        <div className={styles.imgBox}>
          <img
            src={imgUrl}
            alt="cart-item-image"
            className={styles.productImg}
            width="50"
            height="50"
            loading="lazy"
          />
        </div>
        <h5 className={styles.productName}>{name}</h5>
      </div>
      <div className={styles.countAndPrice}>
        <div className={styles.productCount}>
          <button
            className={count === 1 ? styles.incBtn : null}
            onClick={onClickDec}
          >
            -
          </button>
          <p>{count}</p>
          <button onClick={onClickInc}>+</button>
        </div>
        <p className={styles.productPrice}>
          {price}
          <span className={styles.small}>₽</span>
          <button onClick={onClickDelete}>&#215;</button>
        </p>
      </div>
    </div>
  );
};
