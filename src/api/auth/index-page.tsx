import { useQuery } from '@apollo/client';
import { GET_USERS, UsersData } from '../queries/index-page';

interface UserQueryOptions {
  perPage?: number;
}

export const GetUsers = ({ perPage = 5 }: UserQueryOptions) => {
  const token = localStorage.getItem('token') || undefined;
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
