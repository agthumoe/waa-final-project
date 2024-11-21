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

export default api;
