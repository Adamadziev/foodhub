import React from "react";

import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <a href="#">
          <img
            src="/images/logo-footer.svg"
            alt="logo"
            className={styles.footerBrand}
            width="130"
          />
        </a>
        <div className={styles.socialLink}>
          <a href="#">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
          <a href="#">
            <ion-icon name="logo-whatsapp"></ion-icon>
          </a>
          <a href="#">
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <a href="#">
            <ion-icon name="logo-youtube"></ion-icon>
          </a>
        </div>
        <p className={styles.copyright}>
          &copy; Copyright 2022 Foodhub. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
