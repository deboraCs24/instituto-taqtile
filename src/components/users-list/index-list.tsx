import React from 'react';
import { GetUsers } from '../../domain/users-list';
import { UserList } from '.';

export const UserListContainer = () => {
  const token = localStorage.getItem('token') || undefined;
  const { loading, error, data } = GetUsers({ token });

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Lista de usuários</h1>
      {data &&
        data.users.nodes.map((user) => (
          <UserList key={user.id} userName={user.name} userEmail={user.email} userId={user.id} />
        ))}
    </div>
  );
};
