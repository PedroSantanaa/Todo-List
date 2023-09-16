import axios from "axios";

export const api = axios.create({
  baseURL: "https://todolist-yxza.onrender.com",
});
