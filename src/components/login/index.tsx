import React, { useState } from 'react';
import { Input } from '../input';
import { Button } from '../button';
import { isValidEmail, isValidPassword } from '../../utils/strings-utils';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION, LoginInputData } from '../../api/mutation';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [loginMutation, { loading, error }] = useMutation<LoginInputData>(LOGIN_MUTATION);

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
    if (!emailError && !passwordError) {
      loginMutation({ variables: { data: { email, password } } })
        .then((response) => {
          const token = response.data?.login?.token;
          if (token) {
            localStorage.setItem('token', token);
          }
        })
        .catch((error) => {
          console.error('Error na mutação:', error);
        });
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <h1>Bem Vindo a TaqTile</h1>
      <Input text="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} error={emailError} />
      <Input
        text="Senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={passwordError}
      />
      <div>
        <Button onClick={handleSubmit}>Entrar</Button>
      </div>
    </div>
  );
};
