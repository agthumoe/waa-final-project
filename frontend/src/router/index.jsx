import { createBrowserRouter } from 'react-router-dom';
import About from '../pages/About';
import AddressCreate from '../pages/AddressCreate';
import AddressUpdate from '../pages/AddressUpdate';
import AdminDashboard from '../pages/admin/AdminDashboard';
import ProductDetailsPage from '../pages/admin/ProductDetailsPage';
import ProductList from '../pages/admin/ProductList';
import UserList from '../pages/admin/UserList';
import Cart from '../pages/Cart';
import Categories from '../pages/Categories';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import AdminAuthLayout from '../pages/layouts/AdminAuthLayout';
import BuyerAuthLayout from '../pages/layouts/BuyerAuthLayout';
import RootLayout from '../pages/layouts/RootLayout';
import SellerAuthLayout from '../pages/layouts/SellerAuthLayout';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import OrderDetails from '../pages/OrderDetails';
import Product from '../pages/Product';
import Products from '../pages/Products';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import Review from '../pages/Review';
import ProductCreate from '../pages/seller/ProductCreate';
import ProductUpdate from '../pages/seller/ProductUpdate';
import SellerDashboard from '../pages/seller/SellerDashboard';
import SellerProductDetailsPage from '../pages/seller/SellerProductDetailsPage';
import SellerProductList from '../pages/seller/SellerProductList';
import Shops from '../pages/Shops';
import UserAddresses from '../pages/UserAddresses';
import UserOrderList from '../pages/UserOrderList';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: 'register',
          element: <Register />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'contact',
          element: <Contact />,
        },
        {
          path: 'shops',
          element: <Shops />,
        },
        {
          path: '*',
          element: <NotFound />,
        },
        {
          path: 'profile',
          element: <Profile />,
        },
        {
          path: 'products/:id',
          element: <Product />,
        },
        {
          path: 'categories',
          element: <Categories />,
        },
        {
          path: 'products',
          element: <Products />,
        },
        {
          path: 'buyer',
          element: <BuyerAuthLayout />,
          children: [
            {
              path: 'cart',
              element: <Cart />,
            },
            {
              path: 'addresses',
              element: <UserAddresses />,
            },
            {
              path: 'addresses/create',
              element: <AddressCreate />,
            },
            {
              path: 'addresses/:id',
              element: <AddressUpdate />,
            },
            {
              path: 'orders',
              element: <UserOrderList />,
            },
            {
              path: 'orders/:id',
              element: <OrderDetails />,
            },
            {
              path: 'products/:id/reviews',
              element: <Review />,
            },
          ],
        },
        {
          path: 'seller',
          element: <SellerAuthLayout />,
          children: [
            {
              index: true,
              element: <SellerDashboard />,
            },
            {
              path: 'products',
              element: <SellerProductList />,
            },
            {
              path: 'products/create',
              element: <ProductCreate />,
            },
            {
              path: 'products/:id',
              element: <SellerProductDetailsPage />,
            },
            {
              path: 'products/:id/edit',
              element: <ProductUpdate />,
            },
          ],
        },
        {
          path: 'admin',
          element: <AdminAuthLayout />,
          children: [
            {
              index: true,
              element: <AdminDashboard />,
            },
            {
              path: 'users',
              element: <UserList />,
            },
            {
              path: 'products',
              element: <ProductList />,
            },
            {
              path: 'products/:id',
              element: <ProductDetailsPage />,
            },
          ],
        },
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
      v7_startTransition: true,
    },
  }
);

export default router;
