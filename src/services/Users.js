/* eslint-disable no-new-object */
import axios from "axios";

export const getAllUsers = async () => {
  const response = await axios.get("https://api.github.com/users");
  const arr = new Object();
  response.data.map((item) => (arr[item.id] = item));
  return arr;
};
