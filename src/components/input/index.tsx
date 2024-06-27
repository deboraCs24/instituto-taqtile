import React from 'react';

interface TextInputProps {
  text?: string;
  type?: string;
  password?: boolean;
  value?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = ({ text, value, error, onChange, type = 'text' }: TextInputProps) => {
  return (
    <div>
      {text && <label>{text}</label>}
      <input type={type} value={value} onChange={onChange} />
      {!!error && <p> {error}</p>}
    </div>
  );
};
