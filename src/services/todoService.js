import api from '../api/axios';

export const todoService = {
  getTodos: async () => {
    const response = await api.get('/api/todos');
    return response.data;
  },

  createTodo: async (todoData) => {
    const response = await api.post('/api/todos', todoData);
    return response.data;
  },

  updateTodo: async (id, updates) => {
    const response = await api.put(`/api/todos/${id}`, updates);
    return response.data;
  },

  deleteTodo: async (id) => {
    const response = await api.delete(`/api/todos/${id}`);
    return response.data;
  },
};