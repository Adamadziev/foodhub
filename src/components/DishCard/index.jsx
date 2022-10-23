import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCartAdd } from "../../redux/actions/cart";

import styles from "./DishCard.module.css";

export const DishCard = ({
  id,
  name,
  imgUrl,
  price,
  ingredients,
  hotOrVegan = null,
}) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const onClickAddToCart = () => {
    dispatch(setCartAdd({ id, name, imgUrl, price }));
  };

  const cartItemCount = cartItems.find((item) => item.id === id);
  return (
    <div className={styles.productCard + " " + styles.inMenu}>
      <div className={styles.imgBox}>
        <img
          src={imgUrl}
          alt="product-image"
          className={styles.productImg}
          width="200"
          loading="lazy"
        />
        {hotOrVegan === styles.hot && (
          <div className={styles.cardBadge + " " + styles.red}>
            <ion-icon name="flame"></ion-icon>
            <p>Острый</p>
          </div>
        )}
        {hotOrVegan === "vegan" && (
          <div className={styles.cardBadge + " " + styles.green}>
            <ion-icon name="leaf"></ion-icon>
            <p>Веган</p>
          </div>
        )}
        <button onClick={onClickAddToCart} className={styles.addToCart}>
          {/* <p>Выбрать свойства</p> */}
          <img src="/images/cart.svg" alt="cart" width="18px" />
          <div className={styles.count}>
            {cartItemCount ? cartItemCount.count : 0}
          </div>
        </button>
      </div>
      <div className={styles.productContent}>
        <div className={styles.wrapper}>
          <h3 className={styles.productName}>{name}</h3>
          <p className={styles.menuProductPrice}>
            {price}
            <span className={styles.small}>₽</span>
          </p>
        </div>
        {/* <p className="product-text">{ingredients}</p> */}
      </div>
    </div>
  );
};
