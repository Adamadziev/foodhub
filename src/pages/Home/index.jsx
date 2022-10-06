import React from "react";
import { Link } from "react-router-dom";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import "./Home.css";

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section className="home" id="home">
          <div className="home-left">
            <p className="home-subtext">Hi, new friend!</p>
            <h1 className="main-heading">
              We do not cook, we create your emotions!
            </h1>
            <p className="home-text">
              Consectetur numquam poro nemo veniam eligendi rem adipisci quo
              modi
            </p>
            <div className="btn-group">
              <Link to="/menu">
                <button className="btn btn-primary btn-icon">
                  <img src="/images/menu.svg" alt="menu icon" />
                  Our menu
                </button>
              </Link>
              <button className="btn btn-secondary btn-icon">
                <img src="/images/arrow.svg" alt="about us icon" />
                About us
              </button>
            </div>
          </div>
          <div className="home-right">
            <img
              src="/images/food1.png"
              alt="food img"
              className="food-img food-1"
              width="200"
              loading="lazy"
            />
            <img
              src="/images/food2.png"
              alt="food img"
              className="food-img food-2"
              width="200"
              loading="lazy"
            />
            <img
              src="/images/food3.png"
              alt="food img"
              className="food-img food-3"
              width="200"
              loading="lazy"
            />

            <img
              src="/images/dialog-1.svg"
              alt="dialog"
              className="dialog dialog-1"
              width="230"
            />
            <img
              src="/images/dialog-2.svg"
              alt="dialog"
              className="dialog dialog-2"
              width="230"
            />

            <img
              src="/images/circle.svg"
              alt="circle shape"
              className="shape shape-1"
              width="25"
            />
            <img
              src="/images/circle.svg"
              alt="circle shape"
              className="shape shape-2"
              width="15"
            />
            <img
              src="/images/circle.svg"
              alt="circle shape"
              className="shape shape-3"
              width="30"
            />
            <img
              src="/images/ring.svg"
              alt="ring shape"
              className="shape shape-4"
              width="60"
            />
            <img
              src="/images/ring.svg"
              alt="ring shape"
              className="shape shape-5"
              width="40"
            />
          </div>
        </section>

        <section className="about" id="about">
          <div className="about-left">
            <div className="img-box">
              <img
                src="/images/about-image-2.jpg"
                alt="about image"
                className="about-img"
                width="250"
                loading="lazy"
              />
            </div>

            <div className="abs-content-box">
              <div className="dotted-border">
                <div className="number-lg">17</div>
                <p className="text-md">
                  Years <br />
                  Experiense
                </p>
              </div>
            </div>

            <img
              src="/images/circle.svg"
              alt="circle shape"
              className="shape shape-6"
              width="20"
            />
            <img
              src="/images/circle.svg"
              alt="circle shape"
              className="shape shape-7"
              width="30"
            />
            <img
              src="/images/ring.svg"
              alt="ring shape"
              className="shape shape-8"
              width="35"
            />
            <img
              src="/images/ring.svg"
              alt="ring shape"
              className="shape shape-9"
              width="80"
            />
          </div>
          <div className="about-right">
            <h2 className="section-title">We are doing more than you expect</h2>
            <p className="section-text">
              Faudantium magnam error temporibus ipsam aliquid neque quibusdam
              dolorum, quia ea numquam assumenda mollitia dolorem impedit.
              Voluptate at quis exercitationem officia temporibus adipisci quae
              totam enim dolorum, assumenda. Sapiente soluta nostrum
              reprehenderit a velit obcaecati facilis vitae magnam tenetur neque
              vel itaque inventore eaque explicabo commodi maxime! Aliquam
              quasi, voluptates odio.
            </p>
            <p className="section-text">
              Consectetur adipisicing elit. Cupiditate nesciunt amet facilis
              numquam, nam adipisci qui voluptate voluptas enim obcaecati
              veritatis animi nulla, mollitia commodi quaerat ex, autem ea
              laborum.
            </p>

            <img
              src="/images/signature.png"
              alt="signature"
              className="signature"
              width="150"
            />
          </div>
        </section>

        <section className="services" id="services">
          <div className="service-card">
            <p className="card-number">01</p>
            <h3 className="card-heading">We are located in the city center</h3>
            <p className="card-text">
              Porro nemo veniam necessitatibus praesentium eligendi rem
              temporibus adipisci quo modi numquam.
            </p>
          </div>
          <div className="service-card">
            <p className="card-number">02</p>
            <h3 className="card-heading">
              Fresh ingredients from organic farms
            </h3>
            <p className="card-text">
              Porro nemo veniam necessitatibus praesentium eligendi rem
              temporibus adipisci quo modi numquam.
            </p>
          </div>
          <div className="service-card">
            <p className="card-number">03</p>
            <h3 className="card-heading">Own fast delivery. 30 min Maximum</h3>
            <p className="card-text">
              Porro nemo veniam necessitatibus praesentium eligendi rem
              temporibus adipisci quo modi numquam.
            </p>
          </div>
          <div className="service-card">
            <p className="card-number">04</p>
            <h3 className="card-heading">Professional, experienced chefs</h3>
            <p className="card-text">
              Porro nemo veniam necessitatibus praesentium eligendi rem
              temporibus adipisci quo modi numquam.
            </p>
          </div>
          <div className="service-card">
            <p className="card-number">05</p>
            <h3 className="card-heading">The highest standards of service</h3>
            <p className="card-text">
              Porro nemo veniam necessitatibus praesentium eligendi rem
              temporibus adipisci quo modi numquam.
            </p>
          </div>
        </section>

        <section className="product" id="menu">
          <h2 className="section-title">Most popular dishes</h2>
          <p className="section-text">
            Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi.
          </p>

          <div className="products-grid">
            <a href="#">
              <div className="product-card">
                <div className="img-box">
                  <img
                    src="/images/menu1.jpg"
                    alt="product image"
                    className="product-img"
                    width="200"
                    loading="lazy"
                  />
                </div>
                <div className="product-content">
                  <div className="wrapper">
                    <h3 className="product-name">Stracciatella</h3>
                    <p className="product-price">
                      <span className="small">$</span>11
                    </p>
                  </div>
                  <p className="product-text">
                    tomatoes, nori, feta, cheese, mushrooms, rice, noodles,
                    corn, shrimp.
                  </p>
                  <div className="product-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="product-card">
                <div className="img-box">
                  <img
                    src="/images/menu2.jpg"
                    alt="product image"
                    className="product-img"
                    width="200"
                    loading="lazy"
                  />
                </div>
                <div className="product-content">
                  <div className="wrapper">
                    <h3 className="product-name">Chevrefrit au miel</h3>
                    <p className="product-price">
                      <span className="small">$</span>14
                    </p>
                  </div>
                  <p className="product-text">
                    tomatoes, nori, feta, cheese, mushrooms, rice, noodles,
                    corn, shrimp.
                  </p>
                  <div className="product-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="product-card">
                <div className="img-box">
                  <img
                    src="/images/menu3.jpg"
                    alt="product image"
                    className="product-img"
                    width="200"
                    loading="lazy"
                  />
                  <div className="card-badge green">
                    <ion-icon name="leaf"></ion-icon>
                    <p>Vegan</p>
                  </div>
                </div>
                <div className="product-content">
                  <div className="wrapper">
                    <h3 className="product-name">Saumon Gravlax</h3>
                    <p className="product-price">
                      <span className="small">$</span>9
                    </p>
                  </div>
                  <p className="product-text">
                    tomatoes, nori, feta, cheese, mushrooms, rice, noodles,
                    corn, shrimp.
                  </p>
                  <div className="product-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="product-card">
                <div className="img-box">
                  <img
                    src="/images/menu4.jpg"
                    alt="product image"
                    className="product-img"
                    width="200"
                    loading="lazy"
                  />
                  <div className="card-badge red">
                    <ion-icon name="flame"></ion-icon>
                    <p>Hot</p>
                  </div>
                </div>
                <div className="product-content">
                  <div className="wrapper">
                    <h3 className="product-name">Croustillant de poisson</h3>
                    <p className="product-price">
                      <span className="small">$</span>4
                    </p>
                  </div>
                  <p className="product-text">
                    tomatoes, nori, feta, cheese, mushrooms, rice, noodles,
                    corn, shrimp.
                  </p>
                  <div className="product-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="product-card">
                <div className="img-box">
                  <img
                    src="/images/menu5.jpg"
                    alt="product image"
                    className="product-img"
                    width="200"
                    loading="lazy"
                  />
                  <div className="card-badge green">
                    <ion-icon name="leaf"></ion-icon>
                    <p>Vegan</p>
                  </div>
                </div>
                <div className="product-content">
                  <div className="wrapper">
                    <h3 className="product-name">Carpaccio de daurade</h3>
                    <p className="product-price">
                      <span className="small">$</span>6
                    </p>
                  </div>
                  <p className="product-text">
                    tomatoes, nori, feta, cheese, mushrooms, rice, noodles,
                    corn, shrimp.
                  </p>
                  <div className="product-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="product-card">
                <div className="img-box">
                  <img
                    src="/images/menu2.jpg"
                    alt="product image"
                    className="product-img"
                    width="200"
                    loading="lazy"
                  />
                </div>
                <div className="product-content">
                  <div className="wrapper">
                    <h3 className="product-name">Chevrefrit au miel</h3>
                    <p className="product-price">
                      <span className="small">$</span>14
                    </p>
                  </div>
                  <p className="product-text">
                    tomatoes, nori, feta, cheese, mushrooms, rice, noodles,
                    corn, shrimp.
                  </p>
                  <div className="product-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <Link to="/menu">
            <button className="btn btn-primary btn-icon">
              <img src="/images/menu.svg" alt="menu icon" />
              Full menu
            </button>
          </Link>
        </section>

        <section className="testimonials" id="testimonials">
          <h2 className="section-title">What our customers say?</h2>
          <p className="section-text">
            Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi.
          </p>
          <div className="testimonials-grid">
            <div className="testimonials-card">
              <h4 className="card-title">Very tasty</h4>
              <div className="testimonials-rating">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
              </div>
              <p className="testimonials-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
                fugiat totam nobis quas unde excepturi inventore possimus
                laudantium provident, rem eligendi velit. Aut molestias, ipsa
                itaque laborum, natus tempora, ut soluta animi ducimus
                dignissimos deserunt doloribus in reprehenderit rem accusamus!
                Quibusdam labore, aliquam dolor harum!
              </p>
              <div className="customer-info">
                <div className="customer-img-box">
                  <img
                    src="/images/testimonials1.jpg"
                    alt="customer-img"
                    className="customer-img"
                    width="100"
                    loading="lazy"
                  />
                </div>
                <h5 className="customer-name">Jason Statham</h5>
              </div>
            </div>
            <div className="testimonials-card">
              <h4 className="card-title">I have lunch here every day</h4>
              <div className="testimonials-rating">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
              </div>
              <p className="testimonials-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
                fugiat totam nobis quas unde excepturi inventore possimus
                laudantium provident, rem eligendi velit. Aut molestias, ipsa
                itaque laborum, natus tempora, ut soluta animi ducimus
                dignissimos deserunt doloribus in reprehenderit rem accusamus!
                Quibusdam labore, aliquam dolor harum!
              </p>
              <div className="customer-info">
                <div className="customer-img-box">
                  <img
                    src="/images/testimonials2.jpg"
                    alt="customer-img"
                    className="customer-img"
                    width="100"
                    loading="lazy"
                  />
                </div>
                <h5 className="customer-name">Paul Trueman</h5>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
