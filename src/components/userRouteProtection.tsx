'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getToken, isTokenValid, setToken } from '@/components/auth/auth';

const UserRouteProtection = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    // Verificar se o token é válido ao carregar a rota protegida
    const checkTokenValidity = async () => {
      const token = getToken();
      console.log('token obtido:', token);

      if (token === null ) {
        // Se o token não existir ou não for válido, redirecione para a página de login
        router.push("/");
        alert('Token inválido ou expirado. Faça login novamente.');
      }
    };

    // Chamando a função para verificar a validade do token
    checkTokenValidity();
  }, [router]);

  return <>{children}</>;
};

export default UserRouteProtection;