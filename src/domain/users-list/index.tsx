import { useQuery } from '@apollo/client';
import { GET_USERS, UsersData } from './index-get';

interface UserQueryOptions {
  token?: string;
  perPage?: number;
}

export const GetUsers = ({ token, perPage = 5 }: UserQueryOptions) => {
  const { loading, error, data, fetchMore } = useQuery<UsersData>(GET_USERS, {
    context: {
      headers: {
        Authorization: token,
      },
    },
    variables: {
      limit: perPage,
      offset: 0,
    },
  });

  const loadMore = (newOffset: number) => {
    fetchMore({
      variables: {
        offset: newOffset,
        limit: perPage,
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prevResult;
        return fetchMoreResult;
      },
    });
  };

  return { loading, error, data, loadMore };
};
