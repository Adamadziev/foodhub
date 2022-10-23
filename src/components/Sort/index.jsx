import React from "react";

import { sortList } from "../../data";

import styles from "./Sort.module.css";

export const Sort = ({ sortId, setSortId, setSortPopupOpen }) => {
  const onClickSort = (i) => {
    setSortId(i);
    setSortPopupOpen && setSortPopupOpen(false);
  };

  return (
    <ul className={styles.sortUl}>
      {sortList.map((item, i) => {
        return (
          <li
            key={i}
            onClick={() => onClickSort(i)}
            className={sortId === i && styles.active}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Sort;
