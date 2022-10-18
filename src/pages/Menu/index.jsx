import React from "react";
import axios from "axios";

import { DishCard } from "../../components/DishCard";
import { Skeleton } from "../../components/DishCard/Skeleton";
import { Categories } from "../../components/Categories";
import { Sort } from "../../components/Sort";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import { categoryList, sortList } from "../../data";

import "./Menu.css";

import { useSelector, useDispatch } from "react-redux";
import { setDishes } from "../../redux/actions/dishes";

// import { connect } from "react-redux";
// import store from "../../redux/store";
// import { setItems } from "../../redux/actions/dishes";

// console.log(store.dispatch(setItems([1, 2, 3]))); // dispatch нужен для того чтобы наша функция дошла до хранилища

export const Menu = () => {
  const dishes = useSelector((state) => state.dishes);
  const dispatch = useDispatch();

  // const [dishes, setDishes] = React.useState([]);
  const [searchInput, setSearchInput] = React.useState("");

  const [categoryId, setCategoryId] = React.useState(0);
  const [sortId, setSortId] = React.useState(0);

  const [categoriesPopupOpen, setCategoriesPopupOpen] = React.useState(false);
  const [sortPopupOpen, setSortPopupOpen] = React.useState(false);

  const [currentPage, setCurrentPage] = React.useState(1);

  const limitOnPage = 12;

  React.useEffect(() => {
    axios
      .get(`https://62c1dce62af60be89ecefccf.mockapi.io/react-foodhub_dishes`)
      .then((res) => {
        dispatch(setDishes(res.data));
      });
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId, sortId, searchInput]);

  React.useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return function() {
      document.removeEventListener("scroll", scrollHandler);
    };
  });

  // // Фильтрация данных на стороне сервера
  // React.useEffect(() => {
  //   axios
  //     .get(
  //       `https://62c1dce62af60be89ecefccf.mockapi.io/react-foodhub_dishes?categoryId=${categoryId}&sortBy=${sortList[sortId].property}&order=${sortList[sortId].order}`
  //     )
  //     .then((res) => setDishes(res.data));
  // }, [categoryId, sortId]);

  // Сделал dishesFilter и dishesRender чтоб мог сравнить их длину между
  // собой(если они равны значит все dishes подгружены) и не обновлять лишний раз currentPage
  const dishesFilter = dishes.items
    .filter(
      (item) =>
        item.categoryId.includes(categoryId) &&
        item.name.toLowerCase().includes(searchInput.toLowerCase())
    )
    .sort((a, b) => {
      if (sortList[sortId].property === "title") {
        return a.name > b.name ? 1 : -1;
      } else if (
        sortList[sortId].property === "price" &&
        sortList[sortId].order === "desc"
      ) {
        return a.price < b.price ? 1 : -1;
      } else if (sortList[sortId].property === "price") {
        return a.price > b.price ? 1 : -1;
      }
    })
    .map((item) => {
      return (
        <DishCard
          key={item.id}
          id={item.id}
          name={item.name}
          imgUrl={item.imgUrl}
          hotOrVegan={item.hotOrVegan && item.hotOrVegan}
          price={item.price}
          ingredients={item.ingredients}
        />
      );
    });

  const dishesRender = dishesFilter.slice(0, limitOnPage * currentPage);
  const skeletons = [...Array(10)].map((_, i) => <Skeleton key={i} />);

  const scrollHandler = (e) => {
    const pageTotalHeight = e.target.documentElement.scrollHeight; // Полная высота страницы страницы с учетом прокрутки
    const visibleArea = e.target.documentElement.scrollTop; // Кол-во пикселей прокрученные от верха элемента
    const viewportHeight = window.innerHeight; // Высота видимого экрана

    if (pageTotalHeight - (visibleArea + viewportHeight) < 300) {
      if (dishesRender.length !== dishesFilter.length) {
        setCurrentPage((prev) => prev + 1);
      }
    }
  };

  const onClickCategoriesPopup = () => {
    setCategoriesPopupOpen((prev) => !prev);
  };

  const onClickSortPopup = () => {
    setSortPopupOpen((prev) => !prev);
  };

  const onChangeSearchInput = (e) => {
    setSearchInput(e.target.value);
    setCategoryId(0);
  };

  return (
    <>
      <Header />
      <main>
        <section className="menu">
          <h1>Меню</h1>
          <div className="menu-grid">
            <div className="left-side-container">
              <h3 className="text-category">Категории</h3>
              <div className="left-side">
                <Categories
                  categoryId={categoryId}
                  setCategoryId={setCategoryId}
                />
                <div className="sort">
                  <h3>Сортировать по:</h3>
                  <Sort sortId={sortId} setSortId={setSortId} />
                </div>
              </div>
            </div>
            <div className="right-side">
              <div className="choosed-category">
                <div className="search-block-container">
                  <h1>{categoryList[categoryId].name}</h1>
                  <div className="search-block">
                    <input value={searchInput} onChange={onChangeSearchInput} />
                    <svg
                      className="search"
                      // enablBackground="new 0 0 32 32"
                      id="EditableLine"
                      version="1.1"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="14"
                        cy="14"
                        fill="none"
                        id="XMLID_42_"
                        r="9"
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                      ></circle>
                      <line
                        fill="none"
                        id="XMLID_44_"
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        x1="27"
                        x2="20.366"
                        y1="27"
                        y2="20.366"
                      ></line>
                    </svg>
                    <svg
                      className="search-clear"
                      onClick={() => setSearchInput("")}
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"></path>
                    </svg>
                  </div>
                </div>
                <div className="categories-sort active">
                  <div className="categories-popup-container">
                    <p>
                      <b>Категория:</b>{" "}
                      <small onClick={onClickCategoriesPopup}>
                        {categoryList[categoryId].name}
                      </small>
                    </p>
                    <div
                      className={`categories-popup ${categoriesPopupOpen &&
                        "active"}`}
                    >
                      <Categories
                        categoryId={categoryId}
                        setCategoryId={setCategoryId}
                        setCategoriesPopupOpen={setCategoriesPopupOpen}
                      />
                    </div>
                  </div>
                  <div className="sort-popup-container">
                    <p>
                      <b>Сортировать по:</b>{" "}
                      <small onClick={onClickSortPopup}>
                        {sortList[sortId].name}
                      </small>
                    </p>
                    <div className={`sort-popup ${sortPopupOpen && "active"}`}>
                      <Sort
                        sortId={sortId}
                        setSortId={setSortId}
                        setSortPopupOpen={setSortPopupOpen}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu-products-grid">
                {dishes.isLoaded ? dishesRender : skeletons}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Menu;
