
import React from "react";
import { getToken, removeToken, setToken } from '@/components/auth/auth';
import { useRouter } from 'next/navigation';

const ButtonLogOut = () => {
    const router = useRouter();
    const handleLogout = () => {
      const token = getToken()
      // Remova o token ao fazer o logout
      removeToken();
      console.log('token removido:', token)
      // Redirecione para a página de login ou qualquer outra página apropriada
      router.push("/");
      
    };
        return (
        <button  onClick={handleLogout}>Sair</button>
    )
}

export default ButtonLogOut