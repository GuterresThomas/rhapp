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

  useEffect(() => {
    console.log('User in route protection:', user);

    if (user === null) {
      console.log('User is authenticated!');
      // You can perform additional actions or navigation here
    } else {
      alert('User is not authenticated!');
      router.push('/'); // Redirect to login page or other appropriate action
    }
  }, [user, router]);

  return <>{children}</>
};

export default UserRouteProtection;