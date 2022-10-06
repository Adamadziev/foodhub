const initialState = {
  totalPrice: 0,
  items: [],
};

const cart = (state = initialState, action) => {
  // 'cart/add' - ключ, по которому будет срабатывать данный if и вызываться то что нам нужно
  if (action.type === "cart/add") {
    const findItem = state.items.find((item) => item.id === action.payload.id);

    if (findItem) {
      let newTotalPrice = state.totalPrice;
      const newItems = state.items.filter((item) => {
        if (item.id === findItem.id) {
          item.count++;
          newTotalPrice += item.price;
          return true;
        }
        return true;
      });

      return {
        ...state,
        items: newItems,
        totalPrice: newTotalPrice,
      };
    }

    const itemWithCount = action.payload;
    itemWithCount.count = 1;

    return {
      ...state,
      items: [...state.items, itemWithCount],
      totalPrice: (state.totalPrice += action.payload.price),
    };
  }

  if (action.type === "cart/decItem") {
    const findItem = state.items.find((item) => item.id === action.payload);

    let newTotalPrice = state.totalPrice;
    const newItems = state.items.filter((item) => {
      if (item.id === findItem.id) {
        item.count--;
        newTotalPrice -= item.price;
        return true;
      }
      return true;
    });

    return {
      ...state,
      items: newItems,
      totalPrice: newTotalPrice,
    };
  }

  if (action.type === "cart/incItem") {
    const findItem = state.items.find((item) => item.id === action.payload);

    let newTotalPrice = state.totalPrice;
    const newItems = state.items.filter((item) => {
      if (item.id === findItem.id) {
        item.count++;
        newTotalPrice += item.price;
        return true;
      }
      return true;
    });

    return {
      ...state,
      items: newItems,
      totalPrice: newTotalPrice,
    };
  }

  if (action.type === "cart/deleteById") {
    const findItem = state.items.find((item) => item.id === action.payload);

    const newTotalPrice = state.totalPrice - findItem.price * findItem.count;
    const newCartItems = state.items.filter(
      (item) => item.id !== action.payload
    );

    return {
      ...state,
      items: newCartItems,
      totalPrice: newTotalPrice,
    };
  }

  if (action.type === "cart/clear") {
    return {
      ...state,
      items: [],
    };
  }

  return state;
};

export default cart;
