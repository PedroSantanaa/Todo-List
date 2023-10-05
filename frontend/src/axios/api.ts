import axios from "axios";

// otherUrl="https://todolist-yxza.onrender.com"
export const api = axios.create({
  baseURL: "http://localhost:3000/",
});
