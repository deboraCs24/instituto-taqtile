import React from 'react';
import { StyledButton } from './style';

export interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  expand?: boolean;
}

export const Button = ({ children, onClick, disabled, expand }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} expand={expand}>
      {children}
    </StyledButton>
  );
};
