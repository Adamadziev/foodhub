import React from "react";

import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <a href="#">
          <img
            src="/images/logo-footer.svg"
            alt="logo"
            className="footer-brand"
            width="130"
          />
        </a>
        <div className="social-link">
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
        <p className="copyright">
          &copy; Copyright 2022 Foodhub. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
