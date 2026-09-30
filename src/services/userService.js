import API from '../api/axios.js';

export const userService = {

  adminPage : async () => {
   try {
    const response = await API.get('/auth/adminPage');
      return response.data;
    } catch (error) {
      const message = error.response?.data?.message;
      throw new Error(message);
   }
  },

  getUserById : async (id) => {
    try {const response = await API.get(`/auth/user/getUserById/${id}`);
    return response.data;
    } catch(error) { 
      const message = error.response?.data?.message;
      throw new Error(message);

    }
  },

  addUser : async (userData) => {
    try {
      const response = await API.post('/auth/user/addUser', userData);
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.message ||
        'Impossible d\'ajouter cet utilisateur.';
      throw new Error(message);
    }
  },

  updateUser: async (id, userData) => {
    try {
      const response = await API.put(`/auth/user/updateUser/${id}`, userData);
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.message ||
        'Impossible de mettre à jour cet utilisateur.';
      throw new Error(message);
    }
  },

  deleteUser: async (id) => {
    try {
      const response = await API.delete(`/auth/user/deleteUser/${id}`);
      return response.data;
    } catch (error) {
      console.error('Détails erreur API deleteUser :', error.response);
      const message =
        error.response?.data?.message ||
        'Impossible de supprimer cet utilisateur.';
      throw new Error(message);
    }
  },

  getAllUsers : async () => {
    try {
      const response = await API.get(`/auth/user/getAllUsers`);
      return response.data;
    } catch (error) {
      const message = error.response?.data?.message;
      throw new Error(message);
    }
  },

  };



 
