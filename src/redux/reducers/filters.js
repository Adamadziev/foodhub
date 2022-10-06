const initialState = {
  sortId: 0,
  categoryId: 0,
};

const filters = (state = initialState, action) => {
  if (action.type === "filter/setSortId") {
    return {
      ...state,
      sortId: action.payload,
    };
  }
  if (action.type === "filter/setCategoryId") {
    return {
      ...state,
      categoryId: action.payload,
    };
  }

  return state;
};

export default filters;
