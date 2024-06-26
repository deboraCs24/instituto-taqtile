import { gql } from '@apollo/client';

export const GET_DETAILS = gql`
  query User($userId: ID) {
    user(id: $userId) {
      id
      name
      phone
      birthDate
      email
      role
    }
  }
`;

export interface UserData {
  user: {
    id: string;
    name: string;
    phone: string;
    birthDate: string;
    email: string;
    role: string;
  };
}
