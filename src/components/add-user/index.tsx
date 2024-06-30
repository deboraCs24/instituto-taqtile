import React, { useState } from 'react';
import { Button } from '../button';
import { TextInput } from '../input';
import { isValidPassword, isValidEmail } from '../../utils/strings-utils';

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
  const initialUserState: User = {
    name: '',
    email: '',
    birthDate: '',
    phone: '',
    role: '',
    password: '',
  };

  const [user, setUser] = useState<User>(initialUserState);
  const [errors, setErrors] = useState<Partial<Record<keyof User, string>>>({});

  const validateUser = (user: User): Partial<Record<keyof User, string>> => {
    const { name, email, password, birthDate } = user;
    const newErrors: Partial<Record<keyof User, string>> = {};

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

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateUser(user);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Dados do usuário:', user);
      if (onSuccess) {
        onSuccess();
      }
    }
  };

  const handleChange = (key: keyof User, value: string) => {
    setUser({ ...user, [key]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Adicionar Usuário</h1>
      <TextInput
        text="Nome"
        value={user.name}
        onChange={(e) => handleChange('name', e.target.value)}
        error={errors.name}
      />
      <TextInput
        text="Email"
        value={user.email}
        onChange={(e) => handleChange('email', e.target.value)}
        error={errors.email}
      />
      <TextInput
        text="Data de Nascimento"
        type="date"
        value={user.birthDate}
        onChange={(e) => handleChange('birthDate', e.target.value)}
        error={errors.birthDate}
      />
      <TextInput
        text="Telefone"
        type="tel"
        value={user.phone}
        onChange={(e) => handleChange('phone', e.target.value)}
      />
      <TextInput text="Tipo de Usuário" value={user.role} onChange={(e) => handleChange('role', e.target.value)} />
      <TextInput
        text="Senha"
        type="password"
        value={user.password}
        onChange={(e) => handleChange('password', e.target.value)}
        error={errors.password}
      />
      <div style={{ width: '50%', margin: '12px' }}>
        <Button>Adicionar Usuário</Button>
      </div>
    </form>
  );
};
