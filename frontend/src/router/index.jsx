import { createBrowserRouter } from 'react-router-dom';
import About from '../pages/About';
import AdminDashboard from '../pages/admin/AdminDashboard';
import ProductDetailsPage from '../pages/admin/ProductDetailsPage';
import ProductList from '../pages/admin/ProductList';
import UserList from '../pages/admin/UserList';
import BrandCreate from '../pages/auths/BrandCreate';
import BrandsPage from '../pages/auths/BrandsPage';
import CategoryCreate from '../pages/auths/CategoryCreate';
import CategoriesPage from '../pages/auths/CatrgoriesPage';
import SubCategoryCreate from '../pages/auths/CreateSubCategory';
import SubCategoriesPage from '../pages/auths/SubCatrgoriesPage';
import AddressCreate from '../pages/buyers/AddressCreate';
import AddressUpdate from '../pages/buyers/AddressUpdate';
import BuyerOrderDetails from '../pages/buyers/BuyerOrderDetails';
import Cart from '../pages/buyers/Cart';
import Review from '../pages/buyers/Review';
import UserAddresses from '../pages/buyers/UserAddresses';
import UserOrderList from '../pages/buyers/UserOrderList';
import Categories from '../pages/Categories';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import AdminAuthLayout from '../pages/layouts/AdminAuthLayout';
import BuyerAuthLayout from '../pages/layouts/BuyerAuthLayout';
import RootLayout from '../pages/layouts/RootLayout';
import SellerAuthLayout from '../pages/layouts/SellerAuthLayout';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Product from '../pages/Product';
import Products from '../pages/Products';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import ProductCreate from '../pages/seller/ProductCreate';
import ProductUpdate from '../pages/seller/ProductUpdate';
import ProductVariantCreate from '../pages/seller/ProductVariantCreate';
import SellerDashboard from '../pages/seller/SellerDashboard';
import SellerOrderDetails from '../pages/seller/SellerOrderDetails';
import SellerOrderList from '../pages/seller/SellerOrderList';
import SellerProductDetailsPage from '../pages/seller/SellerProductDetailsPage';
import SellerProductList from '../pages/seller/SellerProductList';
import Shops from '../pages/Shops';

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
              element: <BuyerOrderDetails />,
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
            {
              path: 'products/:id/variants/create',
              element: <ProductVariantCreate />,
            },
            {
              path: 'orders',
              element: <SellerOrderList />,
            },
            {
              path: 'orders/:id',
              element: <SellerOrderDetails />,
            },
            {
              path: 'categories',
              element: <CategoriesPage />,
            },
            {
              path: 'subcategories',
              element: <SubCategoriesPage />,
            },
            {
              path: 'brands',
              element: <BrandsPage />,
            },
            {
              path: 'categories/create',
              element: <CategoryCreate />,
            },
            {
              path: 'subcategories/create',
              element: <SubCategoryCreate />,
            },
            {
              path: 'brands/create',
              element: <BrandCreate />,
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
            {
              path: 'categories',
              element: <CategoriesPage />,
            },
            {
              path: 'subcategories',
              element: <SubCategoriesPage />,
            },
            {
              path: 'brands',
              element: <BrandsPage />,
            },
            {
              path: 'categories/create',
              element: <CategoryCreate />,
            },
            {
              path: 'subcategories/create',
              element: <SubCategoryCreate />,
            },
            {
              path: 'brands/create',
              element: <BrandCreate />,
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
