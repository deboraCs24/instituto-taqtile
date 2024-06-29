import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers($limit: Int, $offset: Int) {
    users(data: { limit: $limit, offset: $offset }) {
      nodes {
        id
        email
        name
      }
    }
  }
`;

export interface UserNode {
  id: string;
  name: string;
  email: string;
}

export interface UsersData {
  users: {
    nodes: UserNode[];
  };
}
