import React from 'react';
import { useNavigate } from 'react-router-dom';

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
        <button onClick={navigateToAddUser}>Adicionar Usuário</button>
        {children}
      </div>
    </div>
  );
};
