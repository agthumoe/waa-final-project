import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
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
