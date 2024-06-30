import React from 'react';
import { ButtonContainer } from './style';

export interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  expand?: boolean;
}

export const Button = ({ children, onClick, disabled, expand }: ButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} disabled={disabled} expand={expand}>
      {children}
    </ButtonContainer>
  );
};
