import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      token
    }
  }
`;

export interface LoginInputData {
  login: {
    token: string;
  };
}
