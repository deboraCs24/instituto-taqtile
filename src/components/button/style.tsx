import styled from 'styled-components';
import { ButtonProps } from './';

export const StyledButton = styled.button<ButtonProps>`
  font-family: 'Source Sans 3';
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  width: ${({ expand }) => (expand ? '100%' : 'auto')};
  background-color: ${(props) => (props.disabled ? '#cccccc' : '#2196F3')};
  height: 44px;
  border: none;
  border-radius: 10px;
  cursor: ${(props) => (props.disabled ? 'wait' : 'pointer')};

  @media screen and (max-width: 480px) {
    margin-bottom: 16px;
  }
`;