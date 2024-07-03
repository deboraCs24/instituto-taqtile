import { useQuery } from '@apollo/client';
import { GET_USERS, UsersData } from '../queries/users-list/index-get';

export const GetUsers = () => {
  const token = localStorage.getItem('token');
  const { loading, error, data } = useQuery<UsersData>(GET_USERS, {
    context: {
      headers: {
        Authorization: token,
      },
    },
  });

  return { loading, error, data };
};
