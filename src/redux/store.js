// Все компоненты смогут обратиться к этому файлу и получать нужные значения
import { createStore } from "redux";

import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
