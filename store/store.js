import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsSlice";
import cartReducer from "./reducers/cartSlice";
import authReducer from "./reducers/authSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducers = combineReducers({
  auth: authReducer,
  cart: cartReducer,
});
const persisted = persistReducer(persistConfig, persistedReducers);
const store = configureStore({
  reducer: {
    products: productsReducer,
    persisted,
  },
  middleware: [thunk],
});
export default store;
