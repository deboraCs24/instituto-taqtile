import { useQuery } from '@apollo/client';
import { GET_DETAILS, UserData } from '../queries/index-details';

interface UserDetailsPageProps {
  userId: string;
  token: string;
}

export const GetUserDetails = ({ userId, token }: UserDetailsPageProps) => {
  const { loading, error, data } = useQuery<UserData>(GET_DETAILS, {
    variables: { userId },
    context: {
      headers: {
        Authorization: token,
      },
    },
  });

  return { loading, error, data };
};
