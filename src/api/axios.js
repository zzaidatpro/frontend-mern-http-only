import axios from 'axios';

const API = axios.create({
  baseURL:'https://backend-mern-http-only.vercel.app', 
  withCredentials: true,
});

export default API;