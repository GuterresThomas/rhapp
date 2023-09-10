'use client'

import React, { useEffect } from "react";
import { useRouter } from 'next/navigation';

interface UserRouteProtectionProps {
  children: React.ReactNode;
}

const UserRouteProtection: React.FC<UserRouteProtectionProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('authToken'); // Recupera o token armazenado localmente

    if (token) {
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
