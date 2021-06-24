import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer/index";

const store = configureStore({
  reducer: {
    users: rootReducer,
  },
});

export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import panelReducer from "../features/panel/panelSlice";

// export const store = configureStore({
//   reducer: {
//     panel: panelReducer,
//   },
// });
