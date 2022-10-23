import React from "react";
import { useForm } from "react-hook-form";

import { useSelector } from "react-redux";

import styles from "./Form.module.css";

export const Form = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const cartItems = useSelector((state) => state.cart.items);

  const [orderData, setOrderData] = React.useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [checkHouse, setCheckHouse] = React.useState(false);
  const [cashPay, setCashPay] = React.useState(true);
  const [onlinePay, setOnlinePay] = React.useState(false);
  const [noChange, setNoChange] = React.useState(false);

  const errorSign = () => {
    return <i style={{ color: "rgb(198,34,34)" }}>*</i>;
  };

  const errorBorder = () => {
    return { borderBottom: "1px solid rgb(215,34,34)" };
  };

  // const onClickChekoutOrder = () => {
  //   if (cartItems.length === 0) {
  //     alert("Невозможно оформить пустой заказ");
  //   }
  // };

  const onClickCashPay = () => {
    setCashPay(true);
    setOnlinePay(false);
  };

  const onClickOnlinePay = () => {
    setOnlinePay(true);
    setCashPay(false);
  };

  const onClickNoChange = () => {
    setNoChange((prev) => !prev);
  };

  console.log(orderData);

  return (
    <div className={styles.details}>
      <h1>Оформление заказа</h1>
      <form
        onSubmit={handleSubmit((data) => {
          setOrderData([data, cartItems]);
          reset();
        })}
      >
        <div className={styles.namePhone}>
          <div className={`${styles.name} ${styles.inputForm}`}>
            <span>Имя {errors.name && errorSign()}</span>
            <input
              {...register("name", { required: true })}
              style={errors.name && errorBorder()}
              className={styles.inp}
              type="text"
            />
            {/* <p>{errors.name?.message}</p> */}
          </div>
          <div className={`${styles.phone} ${styles.inputForm}`}>
            <span>Телефон {errors.phone && errorSign()}</span>
            <input
              {...register("phone", {
                required: true,
                minLength: 11,
              })}
              style={errors.phone && errorBorder()}
              className={styles.inp}
              type="tel"
            />
          </div>
        </div>
        <div className={`${styles.delivery} ${styles.active}`}>
          <h4>Доставка</h4>
          <div className={`${styles.street} ${styles.inputForm}`}>
            <span>Улица {errors.phone && errorSign()}</span>
            <input
              {...register("street", {
                required: true,
              })}
              style={errors.street && errorBorder()}
              className={styles.inp}
              type="text"
            />
          </div>
          <div className={`${styles.house} ${styles.inputForm}`}>
            <span>Дом {errors.house && errorSign()}</span>
            <input
              {...register("house", {
                required: true,
              })}
              style={errors.house && errorBorder()}
              className={styles.inp}
              type="text"
            />
          </div>
          <div
            className={`${styles.flat} ${
              checkHouse ? styles.none : styles.inputForm
            }`}
          >
            <span>Квартира {errors.flat && errorSign()}</span>
            <input
              {...register("flat", {
                required: !checkHouse,
              })}
              style={errors.flat && errorBorder()}
              className={styles.inp}
              type="text"
            />
          </div>
          <div
            className={`${styles.floor} ${
              checkHouse ? styles.none : styles.inputForm
            }`}
          >
            <span>Этаж {errors.floor && errorSign()}</span>
            <input
              {...register("floor", {
                required: !checkHouse,
              })}
              style={errors.floor && errorBorder()}
              className={styles.inp}
              type="text"
            />
          </div>
          <div
            className={`${styles.entrance} ${
              checkHouse ? styles.none : styles.inputForm
            }`}
          >
            <span>Подъезд {errors.entrance && errorSign()}</span>
            <input
              {...register("entrance", {
                required: !checkHouse,
              })}
              style={errors.entrance && errorBorder()}
              className={styles.inp}
              type="text"
            />
          </div>
          <div className={styles.privateHouse}>
            <input
              type="checkbox"
              id="check-house"
              value={checkHouse}
              onChange={() => setCheckHouse((prev) => !prev)}
            />
            <label htmlFor="check-house"> Частный Дом </label>
          </div>
        </div>
        <div className={`${styles.comments} ${styles.inputForm}`}>
          Комментарий к заказу
          <input {...register("comment")} className={styles.inp} type="text" />
        </div>
        <div className={`${styles.person} ${styles.inputForm}`}>
          Кол-во персон
          <input
            {...register("countPerson")}
            type="text"
            className={styles.inp}
          />
        </div>
        <div className={styles.wayPayment}>
          <h4>Способ оплаты</h4>
          <div className={styles.cash}>
            <input
              {...register("cashPay")}
              type="radio"
              id="cash"
              name="contact"
              defaultChecked={cashPay}
            />
            <label
              className={styles.cashLabel}
              htmlFor="cash"
              value={cashPay}
              onClick={onClickCashPay}
            >
              Наличными курьеру
            </label>
            <div
              className={`${styles.changeBlock} ${
                cashPay ? styles.active : styles.none
              }`}
            >
              <span className={`${styles.change} ${noChange && styles.none}`}>
                <span>Сдача с {errors.change && errorSign()}</span>
                <input
                  {...register("changeFrom", {
                    required: !noChange && cashPay,
                  })}
                  style={errors.change && errorBorder()}
                  type="text"
                  className={styles.inp}
                />
              </span>
              <span className={styles.noChange}>
                <input
                  {...register("noChange")}
                  type="checkbox"
                  id="no-change-input"
                  value={noChange}
                  onChange={onClickNoChange}
                />
                <label
                  className={styles.noChangeLabel}
                  htmlFor="no-change-input"
                >
                  Без сдачи
                </label>
              </span>
            </div>
          </div>
          <div className={styles.card}>
            <input
              {...register("onlinePay")}
              type="radio"
              id="card"
              name="contact"
              value={onlinePay}
              onChange={onClickOnlinePay}
            />
            <label className={styles.cardLabel} htmlFor="card">
              Онлайн перевод курьеру
            </label>
          </div>
        </div>
        <div className={styles.orderPrice}>
          <div className={styles.sum}>
            <p>Сумма заказ</p>
            <p className={styles.sumPrice}>{totalPrice} р</p>
          </div>
          <div className={styles.total}>
            <p>Итого к оплате. Скидка 10% </p>
            <p>{totalPrice - totalPrice * 0.1} р</p>
          </div>
          <button
            disabled={cartItems.length === 0}
            className={styles.btnPrimary}
          >
            Оформить заказ
          </button>
          <p className={styles.personalData}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, quo
            quisquam! Harum assumenda illo obcaecati soluta libero tempore quasi
            labore fugit voluptatem similique perspiciatis, explicabo itaque
            quam magnam vitae alias?
          </p>
        </div>
      </form>
    </div>
  );
};
