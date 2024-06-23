import React, { useState, useEffect } from 'react';
import { GetUsers } from '../../domain/users-list';
import { UserList } from '.';
import { Button } from '../button';

export const UsersPage = () => {
  const perPage = 5;
  const [page, setPage] = useState<number>(1);
  const token = localStorage.getItem('token') || undefined;
  const { loading, error, data, loadMore } = GetUsers({ token, perPage });

  useEffect(() => {
    const offset = (page - 1) * perPage;
    loadMore(offset);
  }, [page, perPage, loadMore]);

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (data && data.users.pageInfo.hasNextPage) {
      setPage(page + 1);
    }
  };

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
      <div style={{ display: 'flex' }}>
        <Button onClick={handlePreviousPage} disabled={page <= 1}>
          Anterior
        </Button>
        <div>Página {page}</div>
        <Button onClick={handleNextPage} disabled={!data?.users.pageInfo.hasNextPage}>
          Próximo
        </Button>
      </div>
    </div>
  );
};
