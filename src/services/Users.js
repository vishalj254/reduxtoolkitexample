/* eslint-disable no-new-object */
import axios from "axios";
import Swal from "sweetalert2";

export const getAllUsers = async () => {
  try {
    const response = await axios.get("https://api.github.com/users");
    const arr = new Object();
    response.data.map((item) => (arr[item.id] = item));
    return arr;
  } catch (error) {
    Swal.fire({
      title: "Server Error!",
      text: JSON.stringify(error.response.data),
      icon: "error",
    });
  }
};
