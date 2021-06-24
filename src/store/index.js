import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer/index";

const store = configureStore({
  reducer: {
    users: rootReducer,
  },
});

export default store;
