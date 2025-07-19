import axios from 'axios';

// API base URL - will be different for development and production
const API_BASE_URL = import.meta.env.VITE_API_URL || 
'https://assesium-backend-v-0-0-2-lcvz.onrender.com/'
// 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API functions
export const authAPI = {
  register: async (userData) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },

  login: async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  },

  getProfile: async () => {
    const response = await api.get('/auth/profile');
    return response.data;
  },

  updateProfile: async (userData) => {
    const response = await api.put('/auth/profile', userData);
    return response.data;
  },

  changePassword: async (passwordData) => {
    const response = await api.put('/auth/change-password', passwordData);
    return response.data;
  },
};

// Blog API functions
export const blogAPI = {
  getAllPosts: async (params = {}) => {
    const response = await api.get('/blog', { params });
    return response.data;
  },

  getPostById: async (id) => {
    const response = await api.get(`/blog/${id}`);
    return response.data;
  },

  createPost: async (postData) => {
    const response = await api.post('/blog', postData);
    return response.data;
  },

  updatePost: async (id, postData) => {
    const response = await api.put(`/blog/${id}`, postData);
    return response.data;
  },

  deletePost: async (id) => {
    const response = await api.delete(`/blog/${id}`);
    return response.data;
  },

  uploadImage: async (imageFile) => {
    const formData = new FormData();
    formData.append('image', imageFile);
    
    const response = await api.post('/blog/upload-image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  getUserPosts: async (params = {}) => {
    const response = await api.get('/blog/user/posts', { params });
    return response.data;
  },
};

// Admin API functions
export const adminAPI = {
  getStats: async () => {
    const response = await api.get('/admin/stats');
    return response.data;
  },

  getAllUsers: async (params = {}) => {
    const response = await api.get('/admin/users', { params });
    return response.data;
  },

  getUserById: async (userId) => {
    const response = await api.get(`/admin/users/${userId}`);
    return response.data;
  },

  updateUserStatus: async (userId, status) => {
    const response = await api.put(`/admin/users/${userId}/status`, { status });
    return response.data;
  },

  deleteUser: async (userId) => {
    const response = await api.delete(`/admin/users/${userId}`);
    return response.data;
  },
};

// Health check
export const healthCheck = async () => {
  const response = await api.get('/health');
  return response.data;
};

export default api;

