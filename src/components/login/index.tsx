import React, { useState, ChangeEvent } from 'react';
import { TextInput } from '../input';
import { Button } from '../button';
import { isValidEmail, isValidPassword } from '../../utils/strings-utils';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION, LoginInputData } from '../../api/mutation/login';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [loginMutation, { loading, error }] = useMutation<LoginInputData>(LOGIN_MUTATION);

  const navigate = useNavigate();

  const validateEmail = (email: string): void => {
    if (!email.length) {
      setEmailError('Campo obrigatório.');
    } else if (!isValidEmail(email)) {
      setEmailError('O email informado é inválido.');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (password: string): void => {
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

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  const handleSubmit = (): void => {
    validateEmail(email);
    validatePassword(password);
    if (!emailError && !passwordError) {
      loginMutation({ variables: { data: { email, password } } })
        .then((response) => {
          const token = response.data?.login?.token;
          if (token) {
            localStorage.setItem('token', token);
            navigate('/users');
          }
        })
        .catch((error) => {
          console.error('Error na mutação:', error);
        });
    }
  };

  return (
    <div>
      <h1>Bem Vindo a TaqTile</h1>
      <TextInput text="E-mail" value={email} onChange={handleEmailChange} error={emailError} />
      <TextInput text="Senha" type="password" value={password} onChange={handlePasswordChange} error={passwordError} />
      <div>
        <Button onClick={handleSubmit} disabled={loading}>
          {loading ? 'Carregando...' : 'Entrar'}
        </Button>
      </div>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};
