import styled from 'styled-components';
import { ButtonProps } from './';

export const ButtonContainer = styled.button<ButtonProps>`
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
`;
