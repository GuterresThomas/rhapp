'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isTokenValid, setToken } from '@/components/auth/auth';
 // Importe as funções de autenticação
 import jwt from 'jsonwebtoken';

interface UserRouteProtectionProps {
  children: React.ReactNode;
}

const UserRouteProtection: React.FC<UserRouteProtectionProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    if (isTokenValid()) {
      console.log('User is authenticated!');
      // Você pode realizar ações adicionais ou navegação aqui
    } else {
      alert('User is not authenticated!');
      router.push('/'); // Redireciona para a página de login ou outra ação apropriada
    }
  }, [router]);

  return <>{children}</>;
};

export default UserRouteProtection;
