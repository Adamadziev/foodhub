const initialState = {
  items: [],
  isLoaded: false,
};

// Редюсер определяет как изменяется состояние в ответ на экшены, отправленные в store
const dishes = (state = initialState, action) => {
  if (action.type === "dishes/set") {
    return {
      ...state,
      items: action.payload,
      isLoaded: true,
    };
  }

  return state;
};

export default dishes;
