import axios from 'axios';

const API = axios.create({
  baseURL:'backend-todo-lyart-theta.vercel.app/api', 
  withCredentials: true,
});

export default API;