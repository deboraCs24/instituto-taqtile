import React, { useState } from 'react';
import { TextInput } from '../input';
import { Button } from '../button';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    alert('Usuário logado com sucesso');
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
