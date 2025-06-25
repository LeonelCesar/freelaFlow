'use client';

import { useState } from 'react';

type User = {
  name: string;
  email: string;
  avatarUrl?: string;
};

export function useAuth() {
  const [user, setUser] = useState<User>({
    name: 'Leonel César',
    email: 'leonelcesar62@gmail.com',
    avatarUrl: 'https://avatars.githubusercontent.com/u/149327611?v=4',
  });

  const login = (data: User) => setUser(data);

  const logout = () => {
    setUser({
      name: '',
      email: '',
      avatarUrl: '',
    });
  };

  const isAuthenticated = !!user.name;

  return {
    user,
    login,
    logout,
    isAuthenticated,
  };
}
