import React from "react";
import { useSelector } from "react-redux";

import { Footer } from "../../components/Footer";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { OrderItem } from "../../components/OrderItem";

import "./Order.css";

export const Order = () => {
  const cartItems = useSelector((state) => state.cart.items);
  // const totalPrice = useSelector((state) => state.cart.totalPrice);

  const [orderList, setOrderList] = React.useState(false);
  // const [checkHouse, setCheckHouse] = React.useState(false);
  // const [cashPay, setCashPay] = React.useState(true);
  // const [onlinePay, setOnlinePay] = React.useState(false);
  // const [noChange, setNoChange] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const onClickChekoutOrder = () => {
  //   if (cartItems.length === 0) {
  //     alert("Невозможно оформить пустой заказ");
  //   }
  // };

  // const onClickCashPay = () => {
  //   setCashPay(true);
  //   setOnlinePay(false);
  // };

  // const onClickOnlinePay = () => {
  //   setOnlinePay(true);
  //   setCashPay(false);
  // };

  // const onClickNoChange = () => {
  //   setNoChange((prev) => !prev);
  // };

  return (
    <>
      <Header />
      <section className="order-grid">
        <div className="your-order up">
          <h3 onClick={() => setOrderList((prev) => !prev)}>Состав заказа</h3>
          {orderList && (
            <ul>
              {cartItems.map((item, i) => {
                return <OrderItem key={i} {...item} />;
              })}
            </ul>
          )}
        </div>
        <Form />
        {/* <div className="details">
          <h1>Оформление заказа</h1>
          <form>
            <div className="name-phone">
              <div className="name input-form">
                Имя
                <input className="inp" type="text" />
              </div>
              <div className="phone input-form">
                Телефон
                <input className="inp" type="text" />
              </div>
            </div>
            <div className="delivery active">
              <h4>Доставка</h4>
              <div className="street input-form">
                Улица
                <input className="inp" type="text" />
              </div>
              <div className="house input-form">
                Дом
                <input className="inp" type="text" />
              </div>
              <div className={checkHouse ? "flat none" : "flat input-form"}>
                Квартира
                <input className="inp" type="text" />
              </div>
              <div className={checkHouse ? "floor none" : "floor input-form"}>
                Этаж
                <input className="inp" type="text" />
              </div>
              <div
                className={checkHouse ? "entrance none" : "entrance input-form"}
              >
                Подъезд
                <input className="inp" type="text" />
              </div>
              <div className="private-house">
                <input
                  type="checkbox"
                  id="check-house"
                  value={checkHouse}
                  onChange={() => setCheckHouse((prev) => !prev)}
                />
                <label htmlFor="check-house"> Частный Дом </label>
              </div>
            </div>
            <div className="comments input-form">
              Комментарий к заказу
              <input className="inp" type="text" />
            </div>
            <div className="person input-form">
              Кол-во персон
              <input type="text" className="inp" />
            </div>
            <div className="way-payment">
              <h4>Способ оплаты</h4>
              <div className="cash">
                <input type="radio" id="cash" name="contact" />
                <label
                  className="cash-label"
                  htmlFor="cash"
                  value={cashPay}
                  onClick={onClickCashPay}
                >
                  Наличными курьеру
                </label>
                <div
                  className={
                    onlinePay ? "change-block none" : "change-block active"
                  }
                >
                  <span className={noChange ? "change none" : "change"}>
                    Сдача с <br />
                    <input type="text" className="inp" />
                  </span>
                  <span className="no-change">
                    <input
                      type="checkbox"
                      id="no-change-input"
                      value={noChange}
                      onChange={onClickNoChange}
                    />
                    <label
                      className="no-change-label"
                      htmlFor="no-change-input"
                    >
                      Без сдачи
                    </label>
                  </span>
                </div>
              </div>
              <div className="card">
                <input
                  type="radio"
                  id="card"
                  name="contact"
                  value={onlinePay}
                  onChange={onClickOnlinePay}
                />
                <label className="card-label" htmlFor="card">
                  Онлайн перевод курьеру
                </label>
              </div>
            </div>
          </form>
          <div className="order-price">
            <div className="sum">
              <p>Сумма заказ</p>
              <p className="sum-price">{totalPrice} р</p>
            </div>
            <div className="total">
              <p>Итого к оплате. Скидка 10% </p>
              <p>{totalPrice - totalPrice * 0.1} р</p>
            </div>
            <button onClick={onClickChekoutOrder} className="btn-primary">
              Оформить заказ
            </button>
            <p className="personal-data">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, quo
              quisquam! Harum assumenda illo obcaecati soluta libero tempore
              quasi labore fugit voluptatem similique perspiciatis, explicabo
              itaque quam magnam vitae alias?
            </p>
          </div>
        </div> */}
        <div className="your-order">
          {cartItems.length !== 0 ? (
            <>
              <h3>Состав заказа</h3>
              <ul>
                {cartItems.map((item, i) => {
                  return <OrderItem key={i} {...item} />;
                })}
              </ul>
            </>
          ) : (
            <h3>Вы ничего не добавили в корзину</h3>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Order;
