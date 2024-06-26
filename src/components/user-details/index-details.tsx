import React from 'react';

interface DetailsProps {
  userName?: string;
  userEmail?: string;
  userId?: string;
  phone: string;
  birthDate: string;
  role: string;
}

export const Details = ({ userName, userEmail, userId, phone, birthDate, role }: DetailsProps) => {
  return (
    <div key={userId}>
      <h3>Name: {userName}</h3>
      <p>Email: {userEmail}</p>
      <p>Phone: {phone}</p>
      <p>Birth Date: {birthDate}</p>
      <p>Tipos de Usuário: {role}</p>
    </div>
  );
};
