import { createStore } from "redux";

import reducer from "./reducers/index";

export default function configureStore(initialState) {
  const stores = createStore(reducer, initialState);
  return stores;
}