import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Cart } from "../Cart";
import { CartItem } from "../CartItem";

import styles from "./Header.module.css";

export const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const [isCartActive, setIsCartActive] = React.useState(false);

  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.navbarWrapper}>
          <Link to="/">
            <img src="/images/logo.svg" alt="logo" width="130" />
          </Link>
          <ul className={styles.navbarNav}>
            <li>
              <Link to="/" className={styles.navLink}>
                Главная
              </Link>
            </li>
            <li>
              <Link to="/menu" className={styles.navLink}>
                Меню
              </Link>
            </li>
            {/* <li>
              <Link to="/" className={styles.navLink}>
                Доставка
              </Link>
            </li> */}
          </ul>
          <div className={styles.navbarBtnGroup}>
            <button
              onClick={() => setIsCartActive((prev) => !prev)}
              className={styles.shoppingCartBtn}
            >
              <img src="/images/cart.svg" alt="shopping cart icon" width="18" />
              <span className={styles.count}>{cartItems.length}</span>
            </button>
            <button className={styles.menuToggleBtn}>
              <span className={`${styles.line} ${styles.one}`}> </span>
              <span className={`${styles.line} ${styles.two}`}> </span>
              <span className={`${styles.line} ${styles.three}`}> </span>
            </button>
          </div>
        </div>
      </nav>

      <Cart isCartActive={isCartActive} setIsCartActive={setIsCartActive} />
    </header>
  );
};
