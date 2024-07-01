import React from 'react';
import { InputContainer, StyledInput } from './style';
import { Label } from '../../utils/typography/label/style';
import { Caption } from '../../utils/typography/caption/style';

export interface InputProps {
  text?: string;
  type?: string;
  value?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ text, value, error, onChange, type = 'text' }: InputProps) => {
  return (
    <InputContainer>
      {text && <Label>{text}</Label>}
      <StyledInput type={type} value={value} onChange={onChange} error={error} />
      {!!error && <Caption>{error}</Caption>}
    </InputContainer>
  );
};
