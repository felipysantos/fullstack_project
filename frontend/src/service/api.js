import axios from "axios";

const api = axios.create({
  baseURL: "https://fullstack-project-tsnode.herokuapp.com/",
});



export default api;
