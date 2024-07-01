import React, { useState, useEffect } from 'react';
import { Button } from '../button';
import { Input } from '../input';
import { isValidPassword, isValidEmail } from '../../utils/strings-utils';
import { UseCreateUser } from '../../domain/creat-user/authentication';
import { useNavigate } from 'react-router-dom';

interface AddUserProps {
  onSuccess?: () => void;
}

interface User {
  name: string;
  email: string;
  birthDate: string;
  phone: string;
  role: string;
  password: string;
}

export const AddCreateUser = ({ onSuccess }: AddUserProps) => {
  const [user, setUser] = useState<User>({
    name: '',
    email: '',
    birthDate: '',
    phone: '',
    role: '',
    password: '',
  });

  const [errors, setErrors] = useState<{ [key in keyof User]?: string }>({});

  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    }
  }, [token, navigate]);

  const { loading, createUser, error } = UseCreateUser({ token });

  const validateUser = (): boolean => {
    const { name, email, password, birthDate } = user;
    const newErrors: typeof errors = {};

    if (!name.trim()) newErrors.name = 'Nome é obrigatório';
    if (!email.trim() || !isValidEmail(email)) newErrors.email = 'Email inválido';
    if (!password.trim() || !isValidPassword(password)) newErrors.password = 'Senha inválida';
    if (!birthDate.trim()) {
      newErrors.birthDate = 'Data de nascimento é obrigatória';
    } else {
      const birthDateObj = new Date(birthDate);
      const minDate = new Date('1900-01-01');
      const today = new Date();
      if (birthDateObj < minDate || birthDateObj > today) {
        newErrors.birthDate = 'Data de nascimento inválida';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (validateUser()) {
      const { name, email, birthDate, phone, role, password } = user;
      const userData = { email, name, birthDate, phone, role, password };
      createUser({ variables: { data: userData } })
        .then((register) => {
          console.log('Resposta do registro:', register);
          if (register?.data?.createUser) {
            if (onSuccess) onSuccess();
            navigate('/users');
          }
        })
        .catch((error) => {
          console.error('Erro durante a criação do usuário:', error);
        });
    }
  };

  const handleChange = (key: keyof User, value: string) => {
    setUser({ ...user, [key]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Adicionar Usuário</h1>
      <Input text="Nome" value={user.name} onChange={(e) => handleChange('name', e.target.value)} error={errors.name} />
      <Input
        text="Email"
        value={user.email}
        onChange={(e) => handleChange('email', e.target.value)}
        error={errors.email}
      />
      <Input
        text="Data de Nascimento"
        type="date"
        value={user.birthDate}
        onChange={(e) => handleChange('birthDate', e.target.value)}
        error={errors.birthDate}
      />
      <Input
        text="Telefone"
        type="tel"
        value={user.phone}
        onChange={(e) => handleChange('phone', e.target.value)}
        error={errors.phone}
      />
      <Input
        text="Tipo de Usuário"
        value={user.role}
        onChange={(e) => handleChange('role', e.target.value)}
        error={errors.role}
      />
      <Input
        text="Senha"
        type="password"
        value={user.password}
        onChange={(e) => handleChange('password', e.target.value)}
        error={errors.password}
      />
      <div style={{ width: '50%', margin: '12px' }}>
        <Button disabled={loading}>Adicionar Usuário</Button>
        {error && <p style={{ color: 'red' }}>Erro: {error.message}</p>}
      </div>
    </form>
  );
};
