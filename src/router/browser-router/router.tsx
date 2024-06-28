import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from '../../components/login';
import { UsersList } from './pages/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/users',
    element: <UsersList />,
  },
]);

export { RouterProvider, router };
