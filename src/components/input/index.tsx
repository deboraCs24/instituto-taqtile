import React from 'react';
import { InputContainer, StyledInput } from './style';

interface InputProps {
  text?: string;
  type?: string;
  password?: boolean;
  value?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ text, value, error, onChange, type = 'text' }: InputProps) => {
  return (
    <InputContainer>
      {text && <label>{text}</label>}
      <StyledInput type={type} value={value} onChange={onChange} />

      {!!error && <p> {error}</p>}
    </InputContainer>
  );
};
