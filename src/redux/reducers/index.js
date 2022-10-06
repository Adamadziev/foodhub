import { combineReducers } from "redux";

import dishesReducer from "./dishes";
import filterReducer from "./filters";
import cartReducer from "./cart";

// Получает объект reducer'ов чтоб мы могли передать их в createStore
const rootReducer = combineReducers({
  filters: filterReducer,
  dishes: dishesReducer,
  cart: cartReducer,
});

export default rootReducer;
