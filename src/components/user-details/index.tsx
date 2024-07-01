import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { GetUserDetails } from '../../domain/details-user/authentication';
import { Details } from './index-details';
import { Button } from '../button';
import { H1 } from '../../utils/typography/Heading1/style';

export const UserDetailsPage = () => {
  const { userId } = useParams<{ userId: string }>();
  const token = localStorage.getItem('token') || '';
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/users');
  };

  if (!userId) {
    return <p>Usuário não encontrado.</p>;
  }

  const { loading, error, data } = GetUserDetails({ userId, token });

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>Error: {error.message}</p>;
  }

  if (!data || !data.user) {
    console.warn('Dados do usuário não encontrados:', data);
    return <p>Usuário não encontrado.</p>;
  }

  const { user } = data;

  return (
    <div>
      <H1>Detalhes do Usuário</H1>
      <Details
        userId={user.id}
        userName={user.name}
        userEmail={user.email}
        phone={user.phone}
        birthDate={user.birthDate}
        role={user.role}
      />
      <Button onClick={handleGoBack} disabled={loading}>
        Retonar para Lista de Usuários
      </Button>
    </div>
  );
};
