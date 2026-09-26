import API from '../api/axios';

export const authService = {
  login: async (credentials) => {
    const response = await API.post('api/auth/login', credentials);
    return response.data;
  },

  register: async (userData) => {
    const response = await API.post('api/auth/register', userData);
    return response.data;
  },

  logout: async () => {
    const response = await API.post('api/auth/logout');
    return response.data;
  },

  getMe: async () => {
    const response = await API.get('api/auth/me'); 
    return response.data;
  },
};