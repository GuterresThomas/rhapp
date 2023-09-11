'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getToken, isTokenValid, setToken } from '@/components/auth/auth';

interface UserRouteProtectionProps {
  children: React.ReactNode;
}

const UserRouteProtection: React.FC<UserRouteProtectionProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    // Verifique se o usuário está autenticado
    const isAuthenticated = getToken() !== null && isTokenValid();
    
    if (isAuthenticated) {
      // Se o usuário estiver autenticado, verifique a validade do token
      const tokenIsValid = isTokenValid();

      if (tokenIsValid === true) {
        console.log('User is authenticated!');
        // Você pode realizar ações adicionais ou navegação aqui
      } else {
        // Trate o token inválido, talvez redirecione para a página de login
        console.error('Token is invalid:', tokenIsValid.reason);
        alert('token inválido') // Exiba o motivo no console
        router.push('/');
      }
    } else {
      alert('User is not authenticated!');
      router.push('/'); // Redireciona para a página de login ou outra ação apropriada
    }
  }, [router]);

  return <>{children}</>;
};

export default UserRouteProtection;