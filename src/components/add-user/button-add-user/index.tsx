import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../button';

interface ButtonFormProps {
  children?: React.ReactNode;
}

export const UserList = ({ children }: ButtonFormProps) => {
  const navigate = useNavigate();

  const navigateToAddUser = () => {
    navigate('/addUser');
  };

  return (
    <div>
      <h1>Adicionar Lista de Usuários</h1>
      <div>
        <Button onClick={navigateToAddUser}>Adicionar Usuário</Button>
        {children}
      </div>
    </div>
  );
};
