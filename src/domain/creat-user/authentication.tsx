import { useMutation } from '@apollo/client';
import { CREATE_USER_MUTATION } from './index';

interface UserInput {
  email: string;
  name: string;
  birthDate: string;
  phone: string;
  role: string;
  password: string;
}

interface CreateUserResponse {
  createUser: {
    id: string;
    name: string;
    email: string;
    role: string;
    phone: string;
    birthDate: string;
  };
}

interface CreateUserProps {
  token: string | null;
}

export const UseCreateUser = ({ token }: CreateUserProps) => {
  const [createUser, { data, loading, error }] = useMutation<CreateUserResponse, { data: UserInput }>(
    CREATE_USER_MUTATION,
    {
      context: {
        headers: {
          Authorization: token,
        },
      },
    },
  );

  return { createUser, data, loading, error };
};
