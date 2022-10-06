import React from "react";

import { sortList } from "../data";

export const Sort = ({ sortId, setSortId, setSortPopupOpen }) => {
  const onClickSort = (i) => {
    setSortId(i);
    setSortPopupOpen && setSortPopupOpen(false);
  };

  return (
    <ul>
      {sortList.map((item, i) => {
        return (
          <li
            key={i}
            onClick={() => onClickSort(i)}
            className={sortId === i ? "active" : null}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Sort;
