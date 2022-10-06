import React from "react";

import { categoryList } from "../data";

export const Categories = ({
  categoryId,
  setCategoryId,
  setCategoriesPopupOpen,
}) => {
  const onClickCategory = (i) => {
    setCategoryId(i);
    setCategoriesPopupOpen && setCategoriesPopupOpen(false);
  };
  return (
    <div className="categories">
      <ul className="categories-ul">
        {categoryList.map((category, i) => {
          if (category.id === 0) return;
          return (
            <li
              key={category.id}
              onClick={() => onClickCategory(i)}
              className={categoryId === category.id ? "active" : null}
            >
              {category.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
