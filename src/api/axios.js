import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.LOCAL_API_URL || 'http://localhost:5000/api',
  withCredentials: true,
});

export default API;