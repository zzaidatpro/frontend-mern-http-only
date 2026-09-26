import axios from 'axios';

const API = axios.create({
  baseURL:'https://backend-mern-http-only.vercel.app/api', 
  withCredentials: true,
});

export default API;