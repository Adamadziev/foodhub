import React from "react";

import { categoryList } from "../../data";
import styles from "./Categories.module.css";

export const Categories = ({
  categoryId,
  setCategoryId,
  categoriesPopupOpen,
  setCategoriesPopupOpen,
}) => {
  const onClickCategory = (i) => {
    setCategoryId(i);
    setCategoriesPopupOpen && setCategoriesPopupOpen(false);
  };

  return (
    <div className={styles.categories}>
      <ul className={styles.categoriesUl}>
        {categoryList.map((category, i) => {
          return (
            <li
              key={category.id}
              onClick={() => onClickCategory(i)}
              className={categoryId === category.id && styles.active}
            >
              {category.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
