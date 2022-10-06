import React from "react";

import "./OrderItem.css";

export const OrderItem = ({ imgUrl, name, price, count }) => {
  return (
    <li>
      <div className="order-card">
        <div>
          <img src={imgUrl} alt="" width="65" height="65" />
          <p className="meal-name">{name}</p>
        </div>
        <div className="count-price">
          <p className="count">{count} шт</p>
          <p className="price">{price} р</p>
        </div>
      </div>
    </li>
  );
};
