/* eslint-disable no-new-object */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "../../services/Users";

export const setUsersAsync = createAsyncThunk("", async () => {
  return await getAllUsers();
});

const initialState = {
  usersList: {},
};

export const rootReducer = createSlice({
  name: "users",
  initialState,
  reducers: {
    SET_USERS: (state, action) => {
      state.usersList[action.payload[0]] = action.payload[1];
    },
    DELETE_USERS: (state, action) => {
      delete state.usersList[action.payload];
    },
  },
  extraReducers: {
    [setUsersAsync.fulfilled]: (state, action) => {
      state.usersList = action.payload;
    },
  },
});

export const { SET_USERS, SET_MULTIPLE_USERS, DELETE_USERS } =
  rootReducer.actions;

export const reduxUser = (state) => {
  console.log("----->", state.users);
  return state.users.usersList;
};

export const reduxUserById = (state, id) => state.users.usersList[id];

export default rootReducer.reducer;
