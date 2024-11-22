import { createBrowserRouter } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import RootLayout from '../pages/layouts/RootLayout';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Product from '../pages/Product';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
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
