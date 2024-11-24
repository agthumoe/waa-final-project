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

export const getSubCategoriesByCategory = async (categoryId, params) => {
  const response = await api.get(`/categories/${categoryId}/subcategories`, {
    params,
  });
  return response.data;
};

export const getSubCategories = async (params) => {
  const response = await api.get('/subcategories', {
    params,
  });
  return response.data;
};

export const getBrands = async (params) => {
  console.log(params);
  const response = await api.get('/brands', {
    params,
  });
  return response.data;
};

export const updateCartItem = async (id, data) => {
  const response = await api.put(`/carts/items/${id}`, data);
  return response.data;
};

export const deleteCartItem = async (id) => {
  const response = await api.delete(`/carts/items/${id}`);
  return response.data;
};

export const getUserAddresses = async (userId) => {
  const response = await api.get(`/users/${userId}/addresses`);
  return response.data;
};

export const createOrder = async (data) => {
  const response = await api.post('/orders', data);
  return response.data;
};

export const getOrdersByBuyer = async (id) => {
  const response = await api.get(`/buyers/${id}/orders`);
  return response.data;
};

export const getOneOrder = async (id) => {
  const response = await api.get(`/orders/${id}`);
  return response.data;
};

export const getOneAddress = async (id) => {
  const response = await api.get(`/addresses/${id}`);
  return response.data;
};

export const createAddress = async (data) => {
  const response = await api.post('/addresses', data);
  return response.data;
};

export const updateAddress = async (id, data) => {
  const response = await api.put(`/addresses/${id}`, data);
  return response.data;
};

export const updateOrder = async (id, data) => {
  const response = await api.put(`/orders/${id}`, data);
  return response.data;
};

export const getOrderItems = async (id) => {
  const response = await api.get(`/orders/${id}/items`);
  return response.data;
};

export const getOrderDetails = async (id) => {
  return axios.all([getOneOrder(id), getOrderItems(id)]);
};

export const getRatings = async (productId) => {
  const response = await api.get(`/products/${productId}/ratings`);
  return response.data;
};

export const giveRating = async (productId, data) => {
  const response = await api.post(`/products/${productId}/ratings`, data);
  return response.data;
};

export const deleteRating = async (id) => {
  const response = await api.delete(`/ratings/${id}`);
  return response.data;
};

export const getAllUsers = async (params) => {
  const response = await api.get('/users', {
    params,
  });
  return response.data;
};

export const approveUser = async (id) => {
  const response = await api.put(`/users/${id}/approve`);
  return response.data;
};

export const createProduct = async (data) => {
  const response = await api.post('/products', data);
  return response.data;
};

export const updateProduct = async (id, data) => {
  const response = await api.put(`/products/${id}`, data);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await api.delete(`/products/${id}`);
  return response.data;
};

export const addVariantToProduct = async (id, data) => {
  const response = await api.post(`/products/${id}/variants`, data);
  return response.data;
};

export const getOrdersBySeller = async (id) => {
  const response = await api.get(`/sellers/${id}/orders`);
  return response.data;
};

export const variantStockUpdate = async (id, data) => {
  const response = await api.put(`/variants/${id}`, data);
  return response.data;
};

export const createCategory = async (data) => {
  const response = await api.post('/categories', data);
  return response.data;
};

export const updateCategory = async (id, data) => {
  const response = await api.put(`/categories/${id}`, data);
  return response.data;
};

export const createSubCategory = async (categoryId, data) => {
  const response = await api.post(
    `/categories/${categoryId}/subcategories`,
    data
  );
  return response.data;
};

export const updateSubCategory = async (id, data) => {
  const response = await api.put(`/subcategories/${id}`, data);
  return response.data;
};

export const createBrand = async (data) => {
  const response = await api.post('/brands', data);
  return response.data;
};

export const updateBrand = async (id, data) => {
  const response = await api.put(`/brands/${id}`, data);
  return response.data;
};

export const getOneCategory = async (id) => {
  const response = await api.get(`/categories/${id}`);
  return response.data;
};

export const getOneSubCategory = async (id) => {
  const response = await api.get(`/subcategories/${id}`);
  return response.data;
};

export const getOneBrand = async (id) => {
  const response = await api.get(`/brands/${id}`);
  return response.data;
};

export const getHealth = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/actuator/health`
  );
  return response.data;
};

export const getMetrics = async () => {
  const response = await axios.all([
    axios.get(
      `${import.meta.env.VITE_API_URL}/actuator/metrics/jvm.memory.used`
    ),
    axios.get(
      `${import.meta.env.VITE_API_URL}/actuator/metrics/system.cpu.count`
    ),
    axios.get(
      `${import.meta.env.VITE_API_URL}/actuator/metrics/process.uptime`
    ),
  ]);
  return response;
};

export const getOrderCountBySeller = async (id) => {
  const response = await api.get(`/seller/${id}/orders/count`);
  return response.data;
};
export default api;
