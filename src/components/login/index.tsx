import React, { useState, ChangeEvent } from 'react';
import { TextInput } from '../input';
import { Button } from '../button';
import { isValidEmail, isValidPassword } from '../../utils/strings-utils';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email: string) => {
    if (!email.length) {
      setEmailError('Campo obrigatório.');
    } else if (!isValidEmail(email)) {
      setEmailError('O email informado é inválido.');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (password: string) => {
    if (!password.length) {
      setPasswordError('Campo obrigatório.');
    } else if (password.length < 7) {
      setPasswordError('A senha deve ter pelo menos 7 caracteres.');
    } else if (!isValidPassword(password)) {
      setPasswordError('A senha deve ter pelo menos um dígito e uma letra.');
    } else {
      setPasswordError('');
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  const handleSubmit = () => {
    validateEmail(email);
    validatePassword(password);
  };

  return (
    <div>
      <h1>Bem Vindo a TaqTile</h1>
      <TextInput text="E-mail" value={email} onChange={handleEmailChange} error={emailError} />
      <TextInput
        text="Senha"
        type="password"
        password
        value={password}
        onChange={handlePasswordChange}
        error={passwordError}
      />
      <div>
        <Button onClick={handleSubmit}>Entrar</Button>
      </div>
    </div>
  );
};
