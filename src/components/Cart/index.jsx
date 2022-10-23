import React from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { CartItem } from "../CartItem";

import styles from "./Cart.module.css";

export const Cart = (isCartActive, setIsCartActive) => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div
      className={`${styles.cartBox} ${
        isCartActive.isCartActive && styles.cartBoxActive
      }`}
    >
      <ul className={styles.cartBoxUl}>
        <h4 className={styles.cartTitle}>Корзина</h4>
        {cartItems.map((item, i) => {
          return (
            <CartItem
              key={i}
              id={item.id}
              name={item.name}
              imgUrl={item.imgUrl}
              price={item.price}
              count={item.count}
            />
          );
        })}
        <div
          className={cartItems.length ? styles.emptyCartNone : styles.emptyCart}
        >
          <img src="images/empty-cart.jpg" />
          <h3>Корзина пустая</h3>
          <Link to="/menu">
            <button
              onClick={() => setIsCartActive(false)}
              className={styles.emptyCartBtn}
            >
              За покупками
            </button>
          </Link>
        </div>
      </ul>
      {/* <button className="btn btn-secondary">View Order</button> */}
      <div>
        <Link
          to="/order"
          style={{ pointerEvents: cartItems.length === 0 && "none" }}
        >
          <div className={styles.cartBtnGroup}>
            <button
              className={`${styles.btn} ${styles.btnPrimary} ${
                styles.orderBtn
              } ${!cartItems.length && styles.disabled}`}
            >
              Оформить заказ
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};
