import React from 'react';

interface User {
  name: string;
  email: string;
}

export const UserList = () => {
  const users: User[] = [
    { name: 'Alex Santos', email: 'alex.santos@gmail.com' },
    { name: 'Jonas Alves', email: 'jonas.alves@gmail.com' },
    { name: 'Alice Oliveira', email: 'alice.oliveira@gmail.com' },
    { name: 'Leticia Silva', email: 'leticia.silva@gmail.com' },
  ];

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul style={{ listStyleType: 'none' }}>
        {users.map((user, id) => (
          <li key={id} style={{ marginBottom: '12px' }}>
            <div>{user.name}</div>
            <div>{user.email}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
