import { useQuery } from '@apollo/client';
import { GET_USERS, UsersData } from './index-get';

interface UserQueryOptions {
  token?: string;
}

export const GetUsers = ({ token }: UserQueryOptions) => {
  const { loading, error, data } = useQuery<UsersData>(GET_USERS, {
    context: {
      headers: {
        Authorization: token,
      },
    },
  });
  return { loading, error, data };
};
