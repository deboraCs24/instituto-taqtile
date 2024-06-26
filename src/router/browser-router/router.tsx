import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from '../../components/login';
import { UserRegistrationForm } from '../../components/add-user';
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
    element: <UserRegistrationForm onSuccess={() => console.log('Usuário adicionado com sucesso!')} />,
  },
  {
    path: '/usersList/:userId',
    element: <UserDetailsPage />,
  },
  {
    path: '/users/:userId',
    element: <UserDetailsPage />,
  },
  {
    path: '/users/:userId',
    element: <UserDetailsPage />,
  },
]);

export { RouterProvider, router };
