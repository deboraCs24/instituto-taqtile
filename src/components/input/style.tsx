import styled from 'styled-components';
import { getBorderStyle } from '../../utils/style-border';
import { InputProps } from '.';

export const InputContainer = styled.div<{ expand?: boolean }>`
  width: ${({ expand }) => (expand ? '100%' : '20%')};
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 480px) {
    width: 80%;
  }
`;

export const StyledInput = styled.input<InputProps>`
  border: 1px solid ${(props) => getBorderStyle({ ...props, value: props.value ?? '' })};
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 16px;
`;
