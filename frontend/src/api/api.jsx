import axios from 'axios';

const api = axios.create({ baseURL: `${import.meta.env.VITE_API_URL}/api/v1` });

api.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      const newConfig = { ...config };
      newConfig.headers = {
        ...newConfig.headers,
        Authorization: `Bearer ${accessToken}`,
      };
      return newConfig;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const login = async (data) => {
  const response = await api.post('/login', data);
  return response.data;
};

export const getProfile = async () => {
  const response = await api.get('/profile');
  return response.data;
};

export const register = async (data) => {
  const response = await api.post('/register', data);
  return response.data;
};

export const getProducts = async (params) => {
  const response = await api.get('/products', {
    params,
  });
  return response.data;
};

export const getProduct = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export const getCategories = async (params) => {
  const response = await api.get('/categories', {
    params,
  });
  return response.data;
};

export const getCart = async () => {
  const response = await api.get('/carts');
  return response.data;
};

export const addToCart = async (data) => {
  const response = await api.post('/carts/items', data);
  return response.data;
};

export default api;
