import React, { useState } from 'react';
import { TextInput } from '../input';
import { Button } from '../button';
import { isValidEmail, isValidPassword } from '../../utils/strings-utils';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateFields = () => {
    setEmailError('');
    setPasswordError('');

    if (!email.trim()) {
      setEmailError('Campo obrigatório.');
    } else if (!isValidEmail(email)) {
      setEmailError('O email informado é inválido.');
    }

    if (!password.trim()) {
      setPasswordError('Campo obrigatório.');
    } else if (password.length < 7) {
      setPasswordError('A senha deve ter pelo menos 7 caracteres.');
    } else if (!isValidPassword(password)) {
      setPasswordError('A senha deve ter pelo menos um dígito e uma letra.');
    }
  };

  const handleSubmit = () => {
    validateFields();
  };
  return (
    <div>
      <h1>Bem Vindo a TaqTile</h1>
      <TextInput text="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextInput text="Senha" type="password" password value={password} onChange={(e) => setPassword(e.target.value)} />
      <div>
        <Button onClick={handleSubmit}>Entrar</Button>
      </div>
    </div>
  );
};
