'use client'
import React, { useEffect } from "react";
import { useAuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';



interface UserRouteProtectionProps {
    children: React.ReactNode;
  }
  
const UserRouteProtection: React.FC<UserRouteProtectionProps> = ({ children }) => {
  const { user } = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    console.log('User in route protection:', user);
  
  }, [user])
  if (user != null) {
    alert('aaaa')
  };

  return <>{children}</>;
};

export default UserRouteProtection;