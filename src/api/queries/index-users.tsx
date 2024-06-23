import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers($limit: Int, $offset: Int) {
    users(data: { limit: $limit, offset: $offset }) {
      nodes {
        id
        email
        name
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        offset
      }
    }
  }
`;

export interface UserNode {
  id: string;
  name: string;
  email: string;
}

export interface PageInfo {
  limit: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  offset: number;
}

export interface UsersData {
  users: {
    nodes: UserNode[];
    pageInfo: PageInfo;
  };
}
