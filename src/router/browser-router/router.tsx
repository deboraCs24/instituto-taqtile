import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from '../../components/login';
import { UserListContainer } from '../../components/users-list/index-list';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/users',
    element: <UserListContainer />,
  },
]);

export { RouterProvider, router };
