import React, { useState } from 'react';
import { GetUsers } from '../../api/auth/index-page';
import { UserList } from '.';
import { Button } from '../button';

export const UsersPage = () => {
  const perPage = 5;
  const [page, setPage] = useState<number>(1);
  const { loading, error, data, loadMore } = GetUsers({ perPage });

  const handlePageChange = (newPage: number) => {
    const offset = (newPage - 1) * perPage;
    loadMore(offset);
    setPage(newPage);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (data && data.users.pageInfo.hasNextPage) {
      handlePageChange(page + 1);
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
