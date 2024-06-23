import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from '../../components/login';
import { UsersPage } from '../../components/users-list/index-list';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/users',
    element: <UsersPage />,
  },
]);

export { RouterProvider, router };
