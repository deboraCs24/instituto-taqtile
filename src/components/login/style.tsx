import styled from 'styled-components';

export const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled.div`
  width: 20%;
  margin-top: 16px;
  @media screen and (max-width: 480px) {
    width: 80%;
  }
`;
