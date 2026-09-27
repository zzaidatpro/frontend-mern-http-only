import axios from 'axios';

const API = axios.create({
  baseURL:'https://backend-todo-zaidat.vercel.app/api', 
  withCredentials: true,
});

export default API;