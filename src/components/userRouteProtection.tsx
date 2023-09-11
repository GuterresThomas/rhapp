'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getToken, isTokenValid, setToken } from '@/components/auth/auth';

const UserRouteProtection = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    // Verificar se o token é válido ao carregar a rota protegida
    const validToken = async () => {
      const token =  getToken()
      const isValid =  await isTokenValid(token);
      console.log('token válido:', token)

      if (!isValid) {
        // Se o token não for válido, redirecione para a página de login
        router.push("/");
        alert('aaa');
      }

      checkTokenValidity();
    }
  }, [router]);

  return <>{children}</>;
};

export default UserRouteProtection;