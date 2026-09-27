import axios from 'axios';

const API = axios.create({
  baseURL:'https://backend-todo-lyart-theta.vercel.app/api', 
  withCredentials: true,
});

export default API;