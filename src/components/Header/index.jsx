import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartItem } from "../CartItem";

import "./Header.css";

export const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  // const totalPrice = useSelector((state) => state.cart.totalPrice);

  const [isCartActive, setIsCartActive] = React.useState(false);

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-wrapper">
          <Link to="/">
            <img src="/images/logo.svg" alt="logo" width="130" />
          </Link>
          <ul className="navbar-nav">
            <li>
              <Link to="/" className="nav-link">
                Главная
              </Link>
            </li>
            <li>
              <Link to="/menu" className="nav-link">
                Меню
              </Link>
            </li>
            {/* <li>
              <Link to="/" className="nav-link">
                Доставка
              </Link>
            </li> */}
          </ul>
          <div className="navbar-btn-group">
            <button
              onClick={() => setIsCartActive((prev) => !prev)}
              className="shopping-cart-btn"
            >
              <img src="/images/cart.svg" alt="shopping cart icon" width="18" />
              <span className="count">{cartItems.length}</span>
            </button>
            <button className="menu-toggle-btn">
              <span className="line one"></span>
              <span className="line two"></span>
              <span className="line three"></span>
            </button>
          </div>
        </div>
      </nav>

      <div className={`cart-box ${isCartActive && "active"}`}>
        <ul className="cart-box-ul">
          <h4 className="cart-h4">Корзина</h4>
          {/* <li className="cart-item">
            <div className="img-and-name">
              <div className="img-box">
                <img
                  src="/images/menu1.jpg"
                  alt=""
                  className="product-img"
                  width="50"
                  height="50"
                  loading="lazy"
                />
              </div>
              <h5 className="product-name">Sumon gravlax</h5>
            </div>
            <div className="count-and-price">
              <p className="product-count">1 шт</p>
              <p className="product-price">
                410<span className="small">р</span>
              </p>
            </div>
          </li>
          <li className="cart-item">
            <div className="img-and-name">
              <div className="img-box">
                <img
                  src="/images/menu2.jpg"
                  alt=""
                  className="product-img"
                  width="50"
                  height="50"
                  loading="lazy"
                />
              </div>
              <h5 className="product-name">Chevrefried with honey</h5>
            </div>
            <div className="count-and-price">
              <p className="product-count">1 шт</p>
              <p className="product-price">
                410<span className="small">р</span>
              </p>
            </div>
          </li>
          <li className="cart-item">
            <div className="img-and-name">
              <div className="img-box">
                <img
                  src="/images/menu3.jpg"
                  alt=""
                  className="product-img"
                  width="50"
                  height="50"
                  loading="lazy"
                />
              </div>
              <h5 className="product-name">Crispy fish</h5>
            </div>
            <div className="count-and-price">
              <p className="product-count">1 шт</p>
              <p className="product-price">
                410<span className="small">р</span>
              </p>
            </div>
          </li>
          <li className="cart-item">
            <div className="img-and-name">
              <div className="img-box">
                <img
                  src="/images/menu5.jpg"
                  alt=""
                  className="product-img"
                  width="50"
                  height="50"
                  loading="lazy"
                />
              </div>
              <h5 className="product-name">Sea bream carpaccio</h5>
            </div>
            <div className="count-and-price">
              <p className="product-count">1 шт</p>
              <p className="product-price">
                410<span className="small">р</span>
              </p>
            </div>
          </li>
          <li className="cart-item">
            <div className="img-and-name">
              <div className="img-box">
                <img
                  src="/images/menu4.jpg"
                  alt=""
                  className="product-img"
                  width="50"
                  height="50"
                  loading="lazy"
                />
              </div>
              <h5 className="product-name">Stracciatella</h5>
            </div>
            <div className="count-and-price">
              <p className="product-count">1 шт</p>
              <p className="product-price">
                410<span className="small">р</span>
              </p>
            </div>
          </li> */}
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
          <div className={`empty-cart ${!cartItems.length ? "active" : null}`}>
            <img src="images/empty-cart.jpg" />
            <h3>Корзина пустая</h3>
            <Link to="/menu">
              <button
                onClick={() => setIsCartActive(false)}
                className="empty-cart-btn"
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
            <div className="cart-btn-group">
              <button
                className={`btn btn-primary order-btn ${
                  !cartItems.length ? "disabled" : null
                }`}
              >
                Оформить заказ
              </button>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};
