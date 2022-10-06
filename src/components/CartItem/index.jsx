import React from "react";
import { useDispatch } from "react-redux";
import {
  decCartItem,
  deleteCartItemById,
  incCartItem,
} from "../../redux/actions/cart";

import "./CartItem.css";

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
    <div className="cart-item">
      <div className="img-and-name">
        <div className="img-box">
          <img
            src={imgUrl}
            alt=""
            className="product-img"
            width="50"
            height="50"
            loading="lazy"
          />
        </div>
        <h5 className="product-name">{name}</h5>
      </div>
      <div className="count-and-price">
        <div className="product-count">
          <button
            className={count === 1 ? "inc-btn" : null}
            onClick={onClickDec}
          >
            -
          </button>
          <p>{count}</p>
          <button onClick={onClickInc}>+</button>
        </div>
        <p className="product-price">
          {price}
          <span className="small">₽</span>
          <button onClick={onClickDelete}>&#215;</button>
        </p>
      </div>
    </div>
  );
};
