import React from 'react';
import { useAuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';


interface AdminRouteProtectionProps {
    children: React.ReactNode;
  }
  
const AdminRouteProtection: React.FC<AdminRouteProtectionProps> = ({ children }) => {
  const { user } = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    if (!user || !user.isAdmin) {
      // Redirecionar usuário não autenticado ou não administrador para a página inicial
      alert('não autorizado')
      router.push('/');
    }
  }, [user]);

  return <>{children}</>;
};

export default AdminRouteProtection;