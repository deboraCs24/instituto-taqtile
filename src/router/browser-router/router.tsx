import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from '../../components/login';
import { AddCreateUser } from '../../components/add-user';
import { HomePage } from './pages/home';
import { UserDetailsPage } from '../../components/user-details';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/users',
    element: <HomePage />,
  },
  {
    path: '/addUser',
    element: <AddCreateUser onSuccess={() => console.log('Usuário adicionado com sucesso!')} />,
  },
  {
    path: '/users/:userId',
    element: <UserDetailsPage />,
  },
]);

export { RouterProvider, router };
