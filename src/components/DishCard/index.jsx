import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCartAdd } from "../../redux/actions/cart";

import "./DishCard.css";

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
    <div className="product-card in-menu">
      <div className="img-box">
        <img
          src={imgUrl}
          alt="product image"
          className="product-img"
          width="200"
          loading="lazy"
        />
        {hotOrVegan === "hot" && (
          <div className="card-badge red">
            <ion-icon name="flame"></ion-icon>
            <p>Острый</p>
          </div>
        )}
        {hotOrVegan === "vegan" && (
          <div className="card-badge green">
            <ion-icon name="leaf"></ion-icon>
            <p>Веган</p>
          </div>
        )}
        <button onClick={onClickAddToCart} className="add-to-cart">
          {/* <p>Выбрать свойства</p> */}
          <img src="/images/cart.svg" alt="cart" width="18px" />
          <div className="count">{cartItemCount ? cartItemCount.count : 0}</div>
        </button>
      </div>
      <div className="product-content">
        <div className="wrapper">
          <h3 className="product-name">{name}</h3>
          <p className="menu-product-price">
            {price}
            <span className="small">₽</span>
          </p>
        </div>
        {/* <p className="product-text">{ingredients}</p> */}
      </div>
    </div>
  );
};
