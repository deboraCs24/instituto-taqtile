import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from '../../components/login';
import { UserRegistrationForm } from '../../components/add-user';
import { HomePage } from './pages/home';

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
]);

export { RouterProvider, router };
