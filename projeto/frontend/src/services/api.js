import axios from "axios";

// passamos uma configuração
const api = axios.create({
  baseURL: "http://localhost:3030"
});

export default api;
