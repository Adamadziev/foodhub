import React from "react";
import { useSelector } from "react-redux";

import { OrderItem } from "./OrderItem";

export const YourOrder = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="your-order">
      <h3>Состав заказа</h3>
      <ul>
        {cartItems.map((item, i) => {
          return <OrderItem key={i} {...item} />;
        })}
      </ul>
    </div>
  );
};
